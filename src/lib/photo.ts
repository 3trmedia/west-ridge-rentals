// Resizes a photo from src/assets/images at build time and returns attributes for a plain <img>.
// Paths match lib/images.ts ("/images/items/skid-steer.jpg"), so swapping in a real photo is still a same-name file replace.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/**/*.{jpg,jpeg,png,webp}', { eager: true });

/** True when a real (or stock) photo exists for this path; otherwise pages show an icon placeholder. */
export const hasPhoto = (path: string) => Boolean(all['/src/assets/images' + path.replace(/^\/images/, '')]);

export async function photo(path: string, width: number) {
  const mod = all['/src/assets/images' + path.replace(/^\/images/, '')];
  if (!mod) throw new Error(`Missing image: ${path}`);
  const meta = mod.default;
  const w = Math.min(width, meta.width);
  const widths = [...new Set([w, Math.min(w * 2, meta.width)])];
  const img = await getImage({ src: meta, widths, format: 'webp', quality: 78 });
  return { src: img.src, srcset: img.srcSet.attribute, width: w, height: Math.round((w * meta.height) / meta.width) };
}
