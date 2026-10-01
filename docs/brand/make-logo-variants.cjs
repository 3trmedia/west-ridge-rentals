// Cut the brand logos off their white background and build web variants.
// Each pixel is either "charcoal ink" or "rust ink" blended with white; we recover coverage (alpha)
// against white and repaint it in a flat target colour, so edges stay smooth in any colour scheme.
const { createRequire } = require('module');
const sharp = createRequire('E:/Claude Code/clients/carson-holdings/west-ridge-rentals/website/package.json')('sharp');
const fs = require('fs');
const SRC = 'C:/Users/Claude AI/AppData/Local/Temp/claude/C--Users-Claude-AI/01d9e87f-0206-4031-8e87-e74bf2d04d59/images/';
const OUT = 'E:/Claude Code/clients/carson-holdings/west-ridge-rentals/website/public/brand/';
fs.mkdirSync(OUT, { recursive: true });

const CHAR = [38, 41, 45], RUST = [147, 74, 36];
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

async function cutout(file, box, colours) {
  const img = sharp(SRC + file).removeAlpha();
  const { data, info } = await (box ? img.extract(box) : img).raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0, o = 0; i < data.length; i += 3, o += 4) {
    const p = [data[i], data[i + 1], data[i + 2]];
    const rusty = p[0] - p[2] > 25; // warm pixels belong to the rust ink
    const ink = rusty ? RUST : CHAR;
    // coverage from the channel with the most contrast against white
    const c = rusty ? 2 : 0;
    let a = (255 - p[c]) / (255 - ink[c]);
    a = Math.max(0, Math.min(1, a));
    if (a < 0.04) a = 0;
    const col = rusty ? colours.rust : colours.char;
    out[o] = col[0]; out[o + 1] = col[1]; out[o + 2] = col[2]; out[o + 3] = Math.round(a * 255);
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } }).trim({ threshold: 1 }).png().toBuffer();
}

const ON_DARK = { char: hex('#FFFFFF'), rust: hex('#D9824E') };
const ON_LIGHT = { char: CHAR, rust: RUST };

(async () => {
  // Pieces from the full logo (6.png, 1536x1024)
  const mark = (c) => cutout('6.png', { left: 440, top: 200, width: 640, height: 320 }, c);
  const word = (c) => cutout('6.png', { left: 200, top: 520, width: 1150, height: 140 }, c);
  const rentals = (c) => cutout('6.png', { left: 280, top: 680, width: 980, height: 80 }, c);

  // Horizontal header lockup: WR mark left, "WEST RIDGE" over "— RENTALS —" right. Rendered at 2x.
  for (const [name, c] of [['lockup-on-dark.png', ON_DARK], ['lockup-on-light.png', ON_LIGHT]]) {
    const H = 120;
    const m = await sharp(await mark(c)).resize({ height: H }).toBuffer();
    const mMeta = await sharp(m).metadata();
    const TW = 470;
    const w = await sharp(await word(c)).resize({ width: TW }).toBuffer();
    const r = await sharp(await rentals(c)).resize({ width: Math.round(TW * 0.86) }).toBuffer();
    const wM = await sharp(w).metadata(), rM = await sharp(r).metadata();
    const gap = 28, textH = wM.height + 14 + rM.height, top = Math.round((H - textH) / 2);
    const W = mMeta.width + gap + TW;
    await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite([
        { input: m, left: 0, top: 0 },
        { input: w, left: mMeta.width + gap, top },
        { input: r, left: mMeta.width + gap + Math.round((TW - rM.width) / 2), top: top + wM.height + 14 },
      ]).png().toFile(OUT + name);
    console.log(name, W + 'x' + H);
  }

  // Full stacked logo with tagline (footer), and the WR + RENTALS logo (5.png), both colourways.
  for (const [suffix, c] of [['on-dark', ON_DARK], ['on-light', ON_LIGHT]]) {
    await sharp(await cutout('6.png', { left: 100, top: 190, width: 1340, height: 640 }, c)).resize({ width: 760 }).png().toFile(OUT + `logo-full-${suffix}.png`);
    await sharp(await cutout('5.png', null, c)).resize({ width: 640 }).png().toFile(OUT + `logo-wr-rentals-${suffix}.png`);
  }

  // Favicons: WR mark on a white rounded tile.
  const markLight = await mark(ON_LIGHT);
  for (const [size, file] of [[64, 'favicon-64.png'], [180, 'apple-touch-icon.png'], [512, 'icon-512.png']]) {
    const pad = Math.round(size * 0.14), inner = size - pad * 2;
    const icon = await sharp(markLight).resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
    const rr = Math.round(size * 0.22);
    const tile = Buffer.from(`<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><rect width="${size}" height="${size}" rx="${rr}" fill="#ffffff"/></svg>`);
    await sharp(tile).composite([{ input: icon, left: pad, top: pad }]).png().toFile(OUT + file);
  }
  console.log('done');
})();
