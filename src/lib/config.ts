// True once the bookings calendar link is set in Vercel (and the site is redeployed).
// Until then, wording and controls that promise live availability stay hidden.
export const AVAILABILITY_ON = Boolean(import.meta.env.BOOKINGS_ICAL_URL || process.env.BOOKINGS_ICAL_URL);
