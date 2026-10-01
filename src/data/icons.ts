// Line-art placeholders shown on equipment that doesn't have a real photo yet (64x64 viewBox, stroked).
export const equipIcons: Record<string, string> = {
  excavator:
    '<rect x="6" y="46" width="34" height="9" rx="4.5"/><circle cx="12" cy="50.5" r="1.6"/><circle cx="34" cy="50.5" r="1.6"/>' +
    '<path d="M10 46v-7h24v7"/><path d="M14 39v-11h11l5 11"/><path d="M17 28v6h8"/>' +
    '<path d="M28 31l13-15 11 6"/><path d="M52 22l3 13-9 1.5"/><path d="M46 36.5l4-4"/>',
  loader:
    '<rect x="6" y="45" width="32" height="10" rx="5"/><circle cx="12" cy="50" r="1.6"/><circle cx="32" cy="50" r="1.6"/>' +
    '<path d="M10 45V24h15l5 9v12"/><path d="M14 24v11h12"/><path d="M28 27l15 8v6"/>' +
    '<path d="M43 35h11l-2 10H41z"/>',
  trailer:
    '<path d="M16 34h42v7H16z"/><path d="M16 37.5H4"/><path d="M4 35v5"/>' +
    '<circle cx="34" cy="46" r="4.5"/><circle cx="46" cy="46" r="4.5"/><path d="M58 41l4 7"/>' +
    '<path d="M22 34v-4M30 34v-4M38 34v-4M46 34v-4M54 34v-4"/>',
  compactor:
    '<path d="M8 12l17 17"/><path d="M6 14l4-4"/>' +
    '<rect x="22" y="27" width="20" height="12" rx="2.5"/><path d="M27 33h10"/>' +
    '<path d="M18 50h30l-3-11H21z"/><path d="M16 54h34"/>',
};
