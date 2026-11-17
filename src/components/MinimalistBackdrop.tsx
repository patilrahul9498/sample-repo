import React from 'react';
import { BackdropId } from '../data/quotes';

interface MinimalistBackdropProps {
  backdropId: BackdropId;
}

export const MinimalistBackdrop: React.FC<MinimalistBackdropProps> = ({ backdropId }) => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500"
      aria-hidden="true"
    >
      {backdropId === 'misty-ridge' && (
        <svg
          className="h-full w-full object-cover"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mr-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1b232b" />
              <stop offset="48%" stopColor="#2f3d48" />
              <stop offset="100%" stopColor="#141a20" />
            </linearGradient>
            <radialGradient id="mr-glow" cx="62%" cy="38%" r="46%">
              <stop offset="0%" stopColor="#9fb2bf" stopOpacity="0.32" />
              <stop offset="55%" stopColor="#5c6e7c" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#1b232b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="mr-m1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#354450" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#1d262e" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="mr-m2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#222d36" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#11161b" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="mr-mist" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b8c6d1" stopOpacity="0" />
              <stop offset="50%" stopColor="#b8c6d1" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#11161b" stopOpacity="0" />
            </linearGradient>
            <filter id="mr-blur">
              <feGaussianBlur stdDeviation="24" />
            </filter>
          </defs>
          <rect width="1600" height="900" fill="url(#mr-sky)" />
          <rect width="1600" height="900" fill="url(#mr-glow)" />
          <path
            d="M0 540 C260 470, 500 500, 760 445 C1030 390, 1280 465, 1600 415 L1600 900 L0 900 Z"
            fill="url(#mr-m1)"
          />
          <ellipse cx="780" cy="560" rx="920" ry="95" fill="url(#mr-mist)" filter="url(#mr-blur)" />
          <path
            d="M0 645 C310 585, 620 675, 960 600 C1230 540, 1430 610, 1600 575 L1600 900 L0 900 Z"
            fill="url(#mr-m2)"
          />
          <ellipse cx="520" cy="690" rx="760" ry="80" fill="url(#mr-mist)" filter="url(#mr-blur)" />
        </svg>
      )}

      {backdropId === 'travertine-shadow' && (
        <svg
          className="h-full w-full object-cover"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ts-wall" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#352f29" />
              <stop offset="52%" stopColor="#26211d" />
              <stop offset="100%" stopColor="#171412" />
            </linearGradient>
            <linearGradient id="ts-beam" x1="0.15" y1="0" x2="0.85" y2="1">
              <stop offset="0%" stopColor="#d8cab8" stopOpacity="0.22" />
              <stop offset="55%" stopColor="#a99883" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#171412" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ts-arch" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1714" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#12100e" stopOpacity="0.95" />
            </linearGradient>
            <filter id="ts-soft">
              <feGaussianBlur stdDeviation="28" />
            </filter>
          </defs>
          <rect width="1600" height="900" fill="url(#ts-wall)" />
          <polygon points="0,0 740,0 1320,900 180,900" fill="url(#ts-beam)" filter="url(#ts-soft)" />
          <path d="M1080 900 L1080 340 C1080 180, 1460 180, 1460 340 L1460 900 Z" fill="url(#ts-arch)" opacity="0.58" />
          <line x1="0" y1="690" x2="1600" y2="690" stroke="#e7dccb" strokeOpacity="0.06" strokeWidth="1" />
        </svg>
      )}

      {backdropId === 'nordic-lake' && (
        <svg
          className="h-full w-full object-cover"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="nl-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#141d26" />
              <stop offset="52%" stopColor="#283847" />
              <stop offset="53%" stopColor="#1e2a36" />
              <stop offset="100%" stopColor="#0f161d" />
            </linearGradient>
            <radialGradient id="nl-moon" cx="50%" cy="46%" r="38%">
              <stop offset="0%" stopColor="#b8cbd9" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#1e2a36" stopOpacity="0" />
            </radialGradient>
            <filter id="nl-blur">
              <feGaussianBlur stdDeviation="16" />
            </filter>
          </defs>
          <rect width="1600" height="900" fill="url(#nl-sky)" />
          <rect width="1600" height="900" fill="url(#nl-moon)" />
          <path
            d="M0 478 C240 462, 420 474, 620 468 C820 462, 1080 475, 1600 465 L1600 482 L0 482 Z"
            fill="#121a22"
            opacity="0.85"
          />
          <ellipse cx="800" cy="482" rx="760" ry="26" fill="#9fb6c7" opacity="0.1" filter="url(#nl-blur)" />
          <line x1="0" y1="482" x2="1600" y2="482" stroke="#dce7ef" strokeOpacity="0.14" strokeWidth="1" />
        </svg>
      )}

      {backdropId === 'dusk-dunes' && (
        <svg
          className="h-full w-full object-cover"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dd-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1c1816" />
              <stop offset="54%" stopColor="#3b302a" />
              <stop offset="100%" stopColor="#171311" />
            </linearGradient>
            <radialGradient id="dd-sun" cx="34%" cy="44%" r="42%">
              <stop offset="0%" stopColor="#d4b396" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#3b302a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="dd-dune1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#46382f" />
              <stop offset="100%" stopColor="#1f1916" />
            </linearGradient>
            <linearGradient id="dd-dune2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a221d" />
              <stop offset="100%" stopColor="#120e0c" />
            </linearGradient>
          </defs>
          <rect width="1600" height="900" fill="url(#dd-sky)" />
          <rect width="1600" height="900" fill="url(#dd-sun)" />
          <path
            d="M0 530 C420 455, 860 595, 1600 495 L1600 900 L0 900 Z"
            fill="url(#dd-dune1)"
            opacity="0.82"
          />
          <path
            d="M0 640 C480 575, 980 680, 1600 595 L1600 900 L0 900 Z"
            fill="url(#dd-dune2)"
          />
        </svg>
      )}

      {backdropId === 'sea-horizon' && (
        <svg
          className="h-full w-full object-cover"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sh-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#162126" />
              <stop offset="48%" stopColor="#2c3e45" />
              <stop offset="58%" stopColor="#213137" />
              <stop offset="100%" stopColor="#0f171a" />
            </linearGradient>
            <radialGradient id="sh-fog" cx="50%" cy="50%" r="52%">
              <stop offset="0%" stopColor="#bdd0d4" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#213137" stopOpacity="0" />
            </radialGradient>
            <filter id="sh-blur">
              <feGaussianBlur stdDeviation="30" />
            </filter>
          </defs>
          <rect width="1600" height="900" fill="url(#sh-bg)" />
          <ellipse cx="800" cy="490" rx="950" ry="120" fill="url(#sh-fog)" filter="url(#sh-blur)" />
          <line x1="0" y1="510" x2="1600" y2="510" stroke="#cfe0e3" strokeOpacity="0.11" strokeWidth="1" />
        </svg>
      )}

      {backdropId === 'alpine-twilight' && (
        <svg
          className="h-full w-full object-cover"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="at-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#161621" />
              <stop offset="56%" stopColor="#2d2b3b" />
              <stop offset="100%" stopColor="#14131a" />
            </linearGradient>
            <radialGradient id="at-glow" cx="72%" cy="35%" r="44%">
              <stop offset="0%" stopColor="#b5adc9" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#2d2b3b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="at-hill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#23212e" />
              <stop offset="100%" stopColor="#100f15" />
            </linearGradient>
          </defs>
          <rect width="1600" height="900" fill="url(#at-sky)" />
          <rect width="1600" height="900" fill="url(#at-glow)" />
          <path
            d="M0 595 C380 515, 780 620, 1200 545 C1380 512, 1500 535, 1600 520 L1600 900 L0 900 Z"
            fill="url(#at-hill)"
            opacity="0.88"
          />
          <path
            d="M0 685 C460 630, 940 710, 1600 635 L1600 900 L0 900 Z"
            fill="#0e0d13"
          />
        </svg>
      )}

      {backdropId === 'cedar-mist' && (
        <svg
          className="h-full w-full object-cover"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cm-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#151d1a" />
              <stop offset="50%" stopColor="#27342e" />
              <stop offset="100%" stopColor="#101613" />
            </linearGradient>
            <radialGradient id="cm-light" cx="44%" cy="32%" r="46%">
              <stop offset="0%" stopColor="#b6c6bc" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#27342e" stopOpacity="0" />
            </radialGradient>
            <filter id="cm-blur">
              <feGaussianBlur stdDeviation="26" />
            </filter>
          </defs>
          <rect width="1600" height="900" fill="url(#cm-bg)" />
          <rect width="1600" height="900" fill="url(#cm-light)" />
          <path
            d="M0 570 C320 530, 620 580, 960 535 C1240 498, 1450 540, 1600 515 L1600 900 L0 900 Z"
            fill="#18221d"
            opacity="0.82"
          />
          <ellipse cx="820" cy="605" rx="900" ry="85" fill="#bfd0c5" opacity="0.1" filter="url(#cm-blur)" />
          <path
            d="M0 680 C410 645, 890 700, 1600 635 L1600 900 L0 900 Z"
            fill="#0e1411"
          />
        </svg>
      )}

      {/* Subtle 35mm fine-art grain overlay */}
      <svg className="fixed inset-0 h-full w-full opacity-[0.045] mix-blend-overlay">
        <filter id="stillnote-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#stillnote-grain)" />
      </svg>

      {/* Measured contrast scrim for guaranteed typographic legibility */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/60" />
    </div>
  );
};
