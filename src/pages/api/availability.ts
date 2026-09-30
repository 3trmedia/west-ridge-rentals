import type { APIRoute } from 'astro';
import { loadBookings } from '../../lib/bookings';

export const prerender = false;

// BOOKINGS_ICAL_URL is the *secret iCal address* of the Google Calendar used to block booked equipment.
// Set it in Vercel env vars (and locally in .env). Never hardcode it: it grants read access to the calendar.
// This endpoint returns only { itemSlug: [[firstDay, lastDay], ...] }, never titles or notes.
const ICS = import.meta.env.BOOKINGS_ICAL_URL || process.env.BOOKINGS_ICAL_URL;

const json = (body: unknown, cache: string) =>
  new Response(JSON.stringify(body), { status: 200, headers: { 'Content-Type': 'application/json', 'Cache-Control': cache } });

// The site must keep working when availability can't be loaded, so failures return ok:false (HTTP 200,
// not cached for long) and the pages simply fall back to "availability confirmed by our team".
export const GET: APIRoute = async () => {
  if (!ICS) return json({ ok: false, reason: 'not-configured', bookings: {} }, 'public, s-maxage=60');
  try {
    const bookings = await loadBookings(ICS);
    return json({ ok: true, bookings }, 'public, max-age=60, s-maxage=120, stale-while-revalidate=300');
  } catch {
    return json({ ok: false, reason: 'unavailable', bookings: {} }, 'public, s-maxage=30');
  }
};
