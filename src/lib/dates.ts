// The customer's chosen rental dates, remembered in the browser so they carry across pages (no account).
export type Dates = { start: string; end: string };
const KEY = 'wr-dates';
const ok = (k: unknown) => typeof k === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(k);

export const getDates = (): Dates | null => {
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || 'null');
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Denver', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    return d && ok(d.start) && ok(d.end) && d.end >= d.start && d.end >= today ? d : null; // stale dates are dropped
  } catch { return null; }
};
export const setDates = (d: Dates | null) => {
  try { d ? localStorage.setItem(KEY, JSON.stringify(d)) : localStorage.removeItem(KEY); } catch {}
  window.dispatchEvent(new CustomEvent('wr-dates-changed'));
};
