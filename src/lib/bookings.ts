// Server-side: turn a Google Calendar (iCal) feed into "which item is blocked on which days".
// Only item slugs and date ranges leave the server; event titles/notes (customer details) never do.
import ical from 'node-ical';
import { items, bookingKeys } from '../data/equipment';

export type Range = [string, string]; // [firstBlockedDay, lastBlockedDay], both YYYY-MM-DD, inclusive
export type Bookings = Record<string, Range[]>;

const TZ = 'America/Denver';
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const pad = (n: number) => String(n).padStart(2, '0');

const dayKey = (d: Date) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
// All-day events are floating dates: read them with the same (local) getters node-ical built them with.
const dateOnlyKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const addDays = (key: string, n: number) => {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
};

// Which item does an event title refer to? The longest matching key wins, so "Mini Excavator"
// can't be mistaken for "20 Ton Excavator", and unknown titles are ignored (never block anything).
export const matchItem = (title: string): string | null => {
  const t = norm(title);
  let best: { slug: string; len: number } | null = null;
  for (const item of items) {
    for (const key of bookingKeys(item)) {
      const k = norm(key);
      if (k && t.includes(k) && (!best || k.length > best.len)) best = { slug: item.slug, len: k.length };
    }
  }
  return best?.slug ?? null;
};

const merge = (ranges: Range[]): Range[] => {
  const sorted = [...ranges].sort((a, b) => a[0].localeCompare(b[0]));
  const out: Range[] = [];
  for (const r of sorted) {
    const last = out[out.length - 1];
    if (last && r[0] <= addDays(last[1], 1)) { if (r[1] > last[1]) last[1] = r[1]; }
    else out.push([r[0], r[1]]);
  }
  return out;
};

export async function loadBookings(url: string): Promise<Bookings> {
  const data = await ical.async.fromURL(url);
  const today = dayKey(new Date());
  const horizon = new Date(Date.now() + 400 * 86400000);
  const found: Bookings = {};

  const add = (title: string, startKey: string, lastKey: string) => {
    const slug = matchItem(title);
    if (!slug || lastKey < today) return; // past bookings don't matter
    (found[slug] ||= []).push([startKey, lastKey]);
  };

  for (const id in data) {
    const ev = data[id] as any;
    if (ev.type !== 'VEVENT' || !ev.start || ev.status === 'CANCELLED') continue;
    const title: string = typeof ev.summary === 'string' ? ev.summary : ev.summary?.val || '';
    const allDay = ev.datetype === 'date';
    const start = new Date(ev.start);
    const end = ev.end ? new Date(ev.end) : null;
    const span = end ? end.getTime() - start.getTime() : 0;

    const push = (s: Date) => {
      const e = end ? new Date(s.getTime() + span) : s;
      if (allDay) {
        // DTEND is exclusive for all-day events; a 1-day event has no extra day.
        const first = dateOnlyKey(s);
        const last = end ? addDays(dateOnlyKey(e), -1) : first;
        add(title, first, last < first ? first : last);
      } else {
        // Timed event: block every day it touches, in Utah time.
        const first = dayKey(s);
        const lastInstant = end ? new Date(e.getTime() - 1) : s;
        const last = dayKey(lastInstant);
        add(title, first, last < first ? first : last);
      }
    };

    if (ev.rrule) {
      for (const occ of ev.rrule.between(new Date(Date.now() - 86400000), horizon, true)) push(occ);
    } else {
      push(start);
    }
  }

  const out: Bookings = {};
  for (const slug in found) out[slug] = merge(found[slug]);
  return out;
}
