// Rental request list, stored in the browser (no account, no server).
export type ListEntry = { slug: string; name: string; qty: number };
const KEY = 'wr-request-list';

export const getList = (): ListEntry[] => {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
};
export const saveList = (list: ListEntry[]) => {
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch {}
  window.dispatchEvent(new CustomEvent('wr-list-changed'));
};
export const addToList = (slug: string, name: string) => {
  const list = getList();
  const hit = list.find((e) => e.slug === slug);
  if (hit) hit.qty += 1; else list.push({ slug, name, qty: 1 });
  saveList(list);
};
export const listCount = () => getList().reduce((n, e) => n + e.qty, 0);
