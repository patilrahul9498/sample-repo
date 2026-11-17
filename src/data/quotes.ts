export type BackdropId =
  | 'misty-ridge'
  | 'travertine-shadow'
  | 'nordic-lake'
  | 'dusk-dunes'
  | 'sea-horizon'
  | 'alpine-twilight'
  | 'cedar-mist';

export interface DailyQuote {
  id: number;
  text: string;
  author: string;
  source?: string;
  theme: string;
  backdropId: BackdropId;
}

export interface BackdropMeta {
  id: BackdropId;
  title: string;
  paletteBase: string;
}

export const BACKDROPS: Record<BackdropId, BackdropMeta> = {
  'misty-ridge': {
    id: 'misty-ridge',
    title: 'Misty Ridge at Dawn',
    paletteBase: '#1b2228',
  },
  'travertine-shadow': {
    id: 'travertine-shadow',
    title: 'Travertine Light Study',
    paletteBase: '#231f1b',
  },
  'nordic-lake': {
    id: 'nordic-lake',
    title: 'Still Nordic Fjord',
    paletteBase: '#17202a',
  },
  'dusk-dunes': {
    id: 'dusk-dunes',
    title: 'Desert Dunes at Dusk',
    paletteBase: '#221c19',
  },
  'sea-horizon': {
    id: 'sea-horizon',
    title: 'Open Sea Horizon',
    paletteBase: '#162226',
  },
  'alpine-twilight': {
    id: 'alpine-twilight',
    title: 'Alpine Evening Haze',
    paletteBase: '#1d1c26',
  },
  'cedar-mist': {
    id: 'cedar-mist',
    title: 'Quiet Cedar Mist',
    paletteBase: '#17201c',
  },
};

export const DAILY_QUOTES: DailyQuote[] = [
  {
    id: 1,
    text: 'Do not wait for the light to appear; walk patiently into the quiet morning, and you will notice it was already gathering around you.',
    author: 'Rainer Maria Rilke',
    source: 'Letters to a Young Poet',
    theme: 'Patience',
    backdropId: 'misty-ridge',
  },
  {
    id: 2,
    text: 'You have power over your mind—not outside events. Realize this, and you will find strength.',
    author: 'Marcus Aurelius',
    source: 'Meditations',
    theme: 'Steadiness',
    backdropId: 'travertine-shadow',
  },
  {
    id: 3,
    text: 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.',
    author: 'Marie Curie',
    theme: 'Curiosity',
    backdropId: 'nordic-lake',
  },
  {
    id: 4,
    text: 'Tell me, what is it you plan to do with your one wild and precious life?',
    author: 'Mary Oliver',
    source: 'The Summer Day',
    theme: 'Presence',
    backdropId: 'dusk-dunes',
  },
  {
    id: 5,
    text: 'In the midst of winter, I found there was, within me, an invincible summer.',
    author: 'Albert Camus',
    source: 'Return to Tipasa',
    theme: 'Resilience',
    backdropId: 'sea-horizon',
  },
  {
    id: 6,
    text: 'Simplicity is about subtracting the obvious and adding the meaningful.',
    author: 'John Maeda',
    source: 'The Laws of Simplicity',
    theme: 'Clarity',
    backdropId: 'travertine-shadow',
  },
  {
    id: 7,
    text: 'Attention is the rarest and purest form of generosity.',
    author: 'Simone Weil',
    source: 'Gravity and Grace',
    theme: 'Attention',
    backdropId: 'cedar-mist',
  },
  {
    id: 8,
    text: 'Nature does not hurry, yet everything is accomplished.',
    author: 'Lao Tzu',
    source: 'Tao Te Ching',
    theme: 'Rhythm',
    backdropId: 'misty-ridge',
  },
  {
    id: 9,
    text: 'How we spend our days is, of course, how we spend our lives.',
    author: 'Annie Dillard',
    source: 'The Writing Life',
    theme: 'Intention',
    backdropId: 'alpine-twilight',
  },
  {
    id: 10,
    text: 'Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.',
    author: 'A. P. J. Abdul Kalam',
    theme: 'Wonder',
    backdropId: 'sea-horizon',
  },
  {
    id: 11,
    text: 'We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.',
    author: 'Dhammapada',
    theme: 'Stillness',
    backdropId: 'nordic-lake',
  },
  {
    id: 12,
    text: 'One does not discover new lands without consenting to lose sight of the shore for a very long time.',
    author: 'André Gide',
    source: 'The Counterfeiters',
    theme: 'Courage',
    backdropId: 'sea-horizon',
  },
  {
    id: 13,
    text: 'We suffer more often in imagination than in reality.',
    author: 'Seneca',
    source: 'Letters from a Stoic',
    theme: 'Perspective',
    backdropId: 'dusk-dunes',
  },
  {
    id: 14,
    text: 'Hope is the thing with feathers that perches in the soul, and sings the tune without the words, and never stops at all.',
    author: 'Emily Dickinson',
    theme: 'Hope',
    backdropId: 'alpine-twilight',
  },
  {
    id: 15,
    text: 'When you do things from your soul, you feel a river moving in you, a joy.',
    author: 'Rumi',
    theme: 'Purpose',
    backdropId: 'cedar-mist',
  },
  {
    id: 16,
    text: 'Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.',
    author: 'Epicurus',
    theme: 'Gratitude',
    backdropId: 'travertine-shadow',
  },
  {
    id: 17,
    text: 'Silence is not an absence, but the quiet canvas on which clarity begins to take shape.',
    author: 'Picasso',
    theme: 'Silence',
    backdropId: 'misty-ridge',
  },
  {
    id: 18,
    text: 'Not everything that is faced can be changed, but nothing can be changed until it is faced.',
    author: 'James Baldwin',
    theme: 'Honesty',
    backdropId: 'dusk-dunes',
  },
  {
    id: 19,
    text: 'Lighten up on yourself. No one is in charge of your happiness except you.',
    author: 'Maya Angelou',
    theme: 'Grace',
    backdropId: 'nordic-lake',
  },
  {
    id: 20,
    text: 'Somewhere, something incredible is waiting to be known.',
    author: 'Carl Sagan',
    theme: 'Discovery',
    backdropId: 'alpine-twilight',
  },
  {
    id: 21,
    text: 'Everything can be taken from a person but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances.',
    author: 'Viktor E. Frankl',
    source: 'Man’s Search for Meaning',
    theme: 'Freedom',
    backdropId: 'misty-ridge',
  },
  {
    id: 22,
    text: 'Faith is the bird that feels the light and sings when the dawn is still dark.',
    author: 'Rabindranath Tagore',
    theme: 'Trust',
    backdropId: 'sea-horizon',
  },
  {
    id: 23,
    text: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.',
    author: 'Antoine de Saint-Exupéry',
    source: 'Wind, Sand and Stars',
    theme: 'Essence',
    backdropId: 'travertine-shadow',
  },
  {
    id: 24,
    text: 'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
    author: 'Antoine de Saint-Exupéry',
    source: 'The Little Prince',
    theme: 'Depth',
    backdropId: 'dusk-dunes',
  },
  {
    id: 25,
    text: 'Be patient toward all that is unsolved in your heart and try to love the questions themselves.',
    author: 'Rainer Maria Rilke',
    source: 'Letters to a Young Poet',
    theme: 'Inquiry',
    backdropId: 'nordic-lake',
  },
  {
    id: 26,
    text: 'To pay attention, this is our endless and proper work.',
    author: 'Mary Oliver',
    source: 'Yes! No!',
    theme: 'Mindfulness',
    backdropId: 'cedar-mist',
  },
  {
    id: 27,
    text: 'One must still have chaos in oneself to be able to give birth to a dancing star.',
    author: 'Friedrich Nietzsche',
    source: 'Thus Spoke Zarathustra',
    theme: 'Creation',
    backdropId: 'alpine-twilight',
  },
  {
    id: 28,
    text: 'The invariable mark of wisdom is to see the miraculous in the common.',
    author: 'Ralph Waldo Emerson',
    source: 'Nature',
    theme: 'Wisdom',
    backdropId: 'misty-ridge',
  },
  {
    id: 29,
    text: 'Waste no more time arguing about what a good person should be. Be one.',
    author: 'Marcus Aurelius',
    source: 'Meditations',
    theme: 'Integrity',
    backdropId: 'travertine-shadow',
  },
  {
    id: 30,
    text: 'You do not need to leave your room. Remain sitting at your table and listen. Do not even listen, simply wait, be quiet, still and solitary.',
    author: 'Franz Kafka',
    source: 'The Blue Octavo Notebooks',
    theme: 'Stillness',
    backdropId: 'nordic-lake',
  },
  {
    id: 31,
    text: 'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    author: 'Henry David Thoreau',
    theme: 'Growth',
    backdropId: 'cedar-mist',
  },
  {
    id: 32,
    text: 'And now here is a quiet truth: small kindnesses done daily outlast grand gestures spoken once.',
    author: 'Wendell Berry',
    theme: 'Kindness',
    backdropId: 'dusk-dunes',
  },
  {
    id: 33,
    text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: 'Ralph Waldo Emerson',
    theme: 'Authenticity',
    backdropId: 'sea-horizon',
  },
  {
    id: 34,
    text: 'A calm mind brings inner strength and self-confidence, so that is very important for good health.',
    author: 'Tenzin Gyatso',
    theme: 'Equanimity',
    backdropId: 'alpine-twilight',
  },
  {
    id: 35,
    text: 'The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.',
    author: 'Marcel Proust',
    source: 'In Search of Lost Time',
    theme: 'Renewal',
    backdropId: 'misty-ridge',
  },
];

export function getEpochDay(date: Date): number {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000);
}

export function getDayOfYear(date: Date): number {
  const start = Date.UTC(date.getFullYear(), 0, 0);
  const current = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((current - start) / 86_400_000);
}

export function addDays(baseDate: Date, offsetDays: number): Date {
  const next = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + offsetDays);
  return next;
}

export function getQuoteForDate(date: Date): DailyQuote {
  const epochDay = getEpochDay(date);
  const index = ((epochDay % DAILY_QUOTES.length) + DAILY_QUOTES.length) % DAILY_QUOTES.length;
  return DAILY_QUOTES[index];
}

export function formatDisplayDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}
