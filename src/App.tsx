import { useCallback, useEffect, useMemo, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Copy } from 'lucide-react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { MinimalistBackdrop } from './components/MinimalistBackdrop';
import {
  BACKDROPS,
  addDays,
  formatDisplayDate,
  getDayOfYear,
  getQuoteForDate,
} from './data/quotes';

export default function App() {
  const [today, setToday] = useState<Date>(() => new Date());
  const [dayOffset, setDayOffset] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  // Sync automatically at local midnight and when returning to the browser tab
  useEffect(() => {
    const syncDate = () => {
      const now = new Date();
      setToday((prev) => {
        if (
          prev.getFullYear() !== now.getFullYear() ||
          prev.getMonth() !== now.getMonth() ||
          prev.getDate() !== now.getDate()
        ) {
          return now;
        }
        return prev;
      });
    };

    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      1,
    );
    const msUntilMidnight = Math.max(1000, nextMidnight.getTime() - now.getTime());

    const midnightTimer = window.setTimeout(syncDate, msUntilMidnight);
    window.addEventListener('focus', syncDate);
    document.addEventListener('visibilitychange', syncDate);

    return () => {
      window.clearTimeout(midnightTimer);
      window.removeEventListener('focus', syncDate);
      document.removeEventListener('visibilitychange', syncDate);
    };
  }, [today]);

  const activeDate = useMemo(() => addDays(today, dayOffset), [today, dayOffset]);
  const dailyQuote = useMemo(() => getQuoteForDate(activeDate), [activeDate]);
  const backdropMeta = BACKDROPS[dailyQuote.backdropId];
  const formattedDate = useMemo(() => formatDisplayDate(activeDate), [activeDate]);
  const dayNumber = useMemo(() => getDayOfYear(activeDate), [activeDate]);

  const handleCopy = useCallback(async () => {
    const attribution = dailyQuote.source
      ? `${dailyQuote.author}, ${dailyQuote.source}`
      : dailyQuote.author;
    const payload = `“${dailyQuote.text}” — ${attribution}`;

    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = payload;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
    }
  }, [dailyQuote]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    setCopied(false);
  }, [dayOffset]);

  // Subtle keyboard navigation: Left/Right arrows for days, "t" for Today
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === 'ArrowLeft') {
        setDayOffset((prev) => prev - 1);
      } else if (event.key === 'ArrowRight') {
        setDayOffset((prev) => Math.min(0, prev + 1));
      } else if (event.key.toLowerCase() === 't') {
        setDayOffset(0);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="relative flex h-dvh w-screen flex-col justify-between overflow-hidden px-6 py-5 text-stone-100 sm:px-10 sm:py-7 lg:px-16 lg:py-10"
        style={{ backgroundColor: backdropMeta.paletteBase }}
      >
        <MinimalistBackdrop backdropId={dailyQuote.backdropId} />

        {/* Top Bar: Wordmark — Unboxed Daily Date Metadata — Primary Copy Action */}
        <header className="relative z-10 flex items-center justify-between gap-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setDayOffset(0);
            }}
            className="font-serif text-2xl font-medium tracking-tight text-stone-100 whitespace-nowrap shrink-0 transition-opacity duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-sm"
          >
            Stillnote
          </a>

          <div className="hidden sm:flex items-center gap-2.5 text-xs tracking-wide text-stone-300/90 whitespace-nowrap shrink-0">
            <span>{formattedDate}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">Day {dayNumber}</span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex min-h-[40px] items-center gap-2 rounded-md border border-stone-200/20 bg-white/5 px-4 py-2 text-xs font-medium text-stone-100 whitespace-nowrap shrink-0 backdrop-blur-sm transition-colors duration-150 hover:border-stone-200/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-200/80 cursor-pointer"
            aria-live="polite"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-stone-100" aria-hidden="true" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-stone-300" aria-hidden="true" />
                <span>Copy quote</span>
              </>
            )}
          </button>
        </header>

        {/* Center Focal Anchor: Daily Inspiring Quote */}
        <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-2 text-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={`${dailyQuote.id}-${dayOffset}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <p className="mb-5 text-xs tracking-[0.2em] text-stone-300/85">
                {dailyQuote.theme}
                <span className="sm:hidden"> · Day {dayNumber}</span>
              </p>

              <blockquote
                className="font-serif text-[clamp(1.65rem,3.4vw,3.15rem)] font-normal leading-[1.28] tracking-[-0.01em] text-stone-50 [text-wrap:balance]"
              >
                “{dailyQuote.text}”
              </blockquote>

              <figcaption className="mt-8 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-sm text-stone-300">
                <span className="font-medium tracking-wide text-stone-100">
                  — {dailyQuote.author}
                </span>
                {dailyQuote.source && (
                  <>
                    <span aria-hidden="true" className="text-stone-400">
                      ·
                    </span>
                    <cite className="font-serif text-base italic text-stone-300/90">
                      {dailyQuote.source}
                    </cite>
                  </>
                )}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </main>

        {/* Bottom Minimal Bar: Backdrop Title & Quiet Day Switcher */}
        <footer className="relative z-10 flex items-center justify-between gap-6 text-xs text-stone-300/85">
          <div className="truncate text-stone-300/75">
            <span className="hidden sm:inline">{backdropMeta.title}</span>
            <span className="sm:hidden">{formattedDate}</span>
          </div>

          <nav
            aria-label="Daily archive navigation"
            className="flex items-center gap-1 whitespace-nowrap shrink-0"
          >
            <button
              type="button"
              onClick={() => setDayOffset((prev) => prev - 1)}
              className="inline-flex min-h-[44px] sm:min-h-[40px] items-center gap-1.5 rounded-md px-3 py-2 text-stone-300 transition-colors duration-150 hover:bg-white/10 hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-200/80 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Previous</span>
            </button>

            {dayOffset !== 0 && (
              <button
                type="button"
                onClick={() => setDayOffset(0)}
                className="inline-flex min-h-[44px] sm:min-h-[40px] items-center rounded-md px-3 py-2 font-medium text-stone-100 transition-colors duration-150 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-200/80 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Today
              </button>
            )}

            <button
              type="button"
              onClick={() => setDayOffset((prev) => Math.min(0, prev + 1))}
              disabled={dayOffset >= 0}
              className="inline-flex min-h-[44px] sm:min-h-[40px] items-center gap-1.5 rounded-md px-3 py-2 text-stone-300 transition-colors duration-150 hover:bg-white/10 hover:text-stone-100 disabled:pointer-events-none disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-200/80 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </nav>
        </footer>
      </div>
    </MotionConfig>
  );
}
