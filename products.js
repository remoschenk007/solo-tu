/* solo tu — product catalogue
   Later this gets replaced by a Supabase fetch. Same shape. */
const PRODUCTS = [
  {
    id: "st-001",
    name: "Zero",
    cut: "Boxy · Heavyweight",
    price: 89,
    tag: "New",
    poem: "For the day you have nothing to prove.",
    fabric: "320 g/m² organic cotton, garment-dyed black.",
    fit: "Boxy cut, dropped shoulder, wide ribbed collar.",
    sizes: ["XS","S","M","L","XL"],
    tee: "boxy"
  },
  {
    id: "st-002",
    name: "Cut 02",
    cut: "Long · Draped",
    price: 95,
    tag: null,
    poem: "Cloth that falls as it pleases.",
    fabric: "240 g/m² cotton-modal, soft drape.",
    fit: "Extended body, narrow shoulder, lightly draped.",
    sizes: ["S","M","L","XL"],
    tee: "long"
  },
  {
    id: "st-003",
    name: "Dayblind",
    cut: "Regular · Raw",
    price: 85,
    tag: null,
    poem: "Nothing new. Only you.",
    fabric: "280 g/m² cotton, raw hem.",
    fit: "Straight cut, classic shoulder, raw edges.",
    sizes: ["XS","S","M","L","XL"],
    tee: "regular"
  },
  {
    id: "st-004",
    name: "Standstill",
    cut: "Boxy · Cropped",
    price: 89,
    tag: null,
    poem: "Shorter. Cleaner. Less.",
    fabric: "320 g/m² organic cotton, garment-dyed.",
    fit: "Short boxy cut, high hem.",
    sizes: ["XS","S","M","L"],
    tee: "crop"
  },
  {
    id: "st-005",
    name: "Nightedge",
    cut: "Long · Asymmetric",
    price: 99,
    tag: "Limited",
    poem: "A line no one else wears.",
    fabric: "240 g/m² cotton-modal, asymmetric hem.",
    fit: "Long, draped, with an offset lower edge.",
    sizes: ["S","M","L"],
    tee: "long"
  },
  {
    id: "st-006",
    name: "Groundtone",
    cut: "Regular · Pocket",
    price: 89,
    tag: null,
    poem: "The simplest thing, carefully made.",
    fabric: "280 g/m² cotton, patch chest pocket.",
    fit: "Straight cut with a minimal pocket.",
    sizes: ["XS","S","M","L","XL"],
    tee: "pocket"
  }
];

/* Minimal black tee silhouettes — drawn, not photographed.
   Each returns an inline SVG string. Cream stroke on void. */
function teeSVG(type){
  const s = 'stroke="#f4f1ea" stroke-width="1.1" fill="none" stroke-linejoin="round" stroke-linecap="round" opacity="0.85"';
  const fill = 'fill="#101016"';
  const shapes = {
    boxy:`<path ${fill} stroke="#f4f1ea" stroke-width="1.1" d="M70 58 L40 78 L52 104 L70 96 L70 200 L160 200 L160 96 L178 104 L190 78 L160 58 L142 64 Q115 80 88 64 Z"/>`,
    long:`<path ${fill} stroke="#f4f1ea" stroke-width="1.1" d="M74 56 L46 76 L57 100 L74 93 L72 214 L158 214 L156 93 L173 100 L184 76 L156 56 L140 62 Q115 78 90 62 Z"/>`,
    regular:`<path ${fill} stroke="#f4f1ea" stroke-width="1.1" d="M72 58 L44 78 L56 102 L72 95 L72 198 L158 198 L158 95 L174 102 L186 78 L158 58 L141 64 Q115 79 89 64 Z"/>`,
    crop:`<path ${fill} stroke="#f4f1ea" stroke-width="1.1" d="M70 58 L42 78 L54 102 L70 95 L70 168 L160 168 L160 95 L176 102 L188 78 L160 58 L142 64 Q115 80 88 64 Z"/>`,
    pocket:`<path ${fill} stroke="#f4f1ea" stroke-width="1.1" d="M72 58 L44 78 L56 102 L72 95 L72 198 L158 198 L158 95 L174 102 L186 78 L158 58 L141 64 Q115 79 89 64 Z"/><rect x="92" y="108" width="22" height="24" stroke="#f4f1ea" stroke-width="0.8" fill="none" opacity="0.4"/>`
  };
  return `<svg viewBox="0 0 230 240" xmlns="http://www.w3.org/2000/svg" class="card-tee">${shapes[type]||shapes.regular}</svg>`;
}
