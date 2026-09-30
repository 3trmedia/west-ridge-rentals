// Client-side availability helpers. Dates are plain "YYYY-MM-DD" strings (Utah calendar days), compared as strings.
export type Range = [string, string];
export type Availability = { ok: boolean; bookings: Record<string, Range[]> };

let cached: Promise<Availability> | null = null;
export const loadAvailability = (): Promise<Availability> => {
  cached ||= fetch('/api/availability')
    .then((r) => r.json())
    .then((d) => ({ ok: !!d.ok, bookings: d.bookings || {} }))
    .catch(() => ({ ok: false, bookings: {} }));
  return cached;
};

const toUTC = (k: string) => { const [y, m, d] = k.split('-').map(Number); return Date.UTC(y, m - 1, d); };
export const addDays = (k: string, n: number) => new Date(toUTC(k) + n * 86400000).toISOString().slice(0, 10);
export const daysBetween = (a: string, b: string) => Math.round((toUTC(b) - toUTC(a)) / 86400000);
export const todayKey = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Denver', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

export const fmt = (k: string) =>
  new Date(toUTC(k)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
export const fmtRange = (r: Range) => (r[0] === r[1] ? fmt(r[0]) : `${fmt(r[0])} to ${fmt(r[1])}`);

export const isBooked = (a: Availability, slug: string, day: string) =>
  (a.bookings[slug] || []).some(([s, e]) => day >= s && day <= e);

/** Bookings of this item that overlap [start, end]. */
export const conflicts = (a: Availability, slug: string, start: string, end: string): Range[] =>
  (a.bookings[slug] || []).filter(([s, e]) => s <= end && e >= start);

/** First start date on/after `from` where the whole `len`-day window is free. */
export const nextFree = (a: Availability, slug: string, from: string, len: number): string => {
  let d = from;
  for (let i = 0; i < 800; i++) {
    const c = conflicts(a, slug, d, addDays(d, len - 1));
    if (!c.length) return d;
    d = addDays(c[c.length - 1][1], 1);
  }
  return d;
};

/** If the item is booked today, the last day of that booking (otherwise null). */
export const bookedUntil = (a: Availability, slug: string): string | null => {
  const t = todayKey();
  const r = (a.bookings[slug] || []).find(([s, e]) => t >= s && t <= e);
  return r ? r[1] : null;
};
