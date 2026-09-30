// Temporary stock photos live in /public/images (see CREDITS.md there). To use a real photo, replace the file
// with one of the same name, nothing else needs to change.
export const itemImg = (slug: string) => `/images/items/${slug}.jpg`;
export const catImg = (slug: string) => `/images/categories/${slug}.jpg`;
export const IMG = {
  hero: '/images/hero.jpg',
  about: '/images/about.jpg',
  yard: '/images/yard.jpg',
  contractors: '/images/industry-contractors.jpg',
  landscapers: '/images/industry-landscapers.jpg',
  homeowners: '/images/industry-homeowners.jpg',
};
