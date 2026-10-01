// Rental request list, stored in the browser (no account, no server).
// Each item is one machine: availability is tracked per machine, so there are no quantities.
export type ListEntry = { slug: string; name: string };
const KEY = 'wr-request-list';

export const getList = (): ListEntry[] => {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
    const seen = new Set<string>();
    // Older saved lists had a qty field and could repeat items; keep one of each.
    return (Array.isArray(raw) ? raw : []).filter((e) => e && e.slug && !seen.has(e.slug) && seen.add(e.slug)).map((e) => ({ slug: e.slug, name: e.name }));
  } catch { return []; }
};
export const saveList = (list: ListEntry[]) => {
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch {}
  window.dispatchEvent(new CustomEvent('wr-list-changed'));
};
export const addToList = (slug: string, name: string) => {
  const list = getList();
  if (!list.some((e) => e.slug === slug)) saveList([...list, { slug, name }]);
};
export const listCount = () => getList().length;
