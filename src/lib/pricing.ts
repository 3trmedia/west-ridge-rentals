// Rental pricing shared by the site and the request form. Rates are [day, week, month] in USD.
export type Rates = [number, number, number];

export const money = (n: number) => '$' + Math.round(n).toLocaleString('en-US');

/** Cheapest way to rent for `days` days using the day/week/month rates (a 7-day week, a 30-day month). */
export const estimate = ([day, week, month]: Rates, days: number): number => {
  if (days < 1) return 0;
  const months = Math.floor(days / 30);
  const afterMonths = days % 30;
  const weeks = Math.floor(afterMonths / 7);
  const extraDays = afterMonths % 7;
  const greedy = months * month + weeks * week + Math.min(extraDays * day, week);
  return Math.min(days * day, Math.ceil(days / 7) * week, Math.ceil(days / 30) * month, greedy);
};
