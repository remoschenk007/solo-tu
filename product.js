const params = new URLSearchParams(location.search);
const pid = params.get('id') || 'st-001';
const p = PRODUCTS.find(x=>x.id===pid) || PRODUCTS[0];
document.title = `${p.name} — solo tu`;
let selSize = null;

document.getElementById('pdp').innerHTML = `
  <div class="pdp-visual">${teeSVG(p.tee)}</div>
  <div class="pdp-info">
    <a href="shop.html" class="pdp-back">← Alle Stücke</a>
    <div class="pdp-cut">${p.cut}${p.tag?` · ${p.tag}`:''}</div>
    <h1 class="pdp-name">${p.name}</h1>
    <p class="pdp-poem">${p.poem}</p>
    <div class="pdp-price">CHF ${p.price}</div>
    <div class="pdp-label">Grösse</div>
    <div class="pdp-sizes">${p.sizes.map(s=>`<button class="size" data-size="${s}">${s}</button>`).join('')}</div>
    <button class="pdp-add" id="add" disabled>Grösse wählen</button>
    <p class="pdp-hint">Einzelstück · solange Vorrat</p>
    <div class="pdp-details">
      <div class="pdp-detail"><span>Stoff</span><p>${p.fabric}</p></div>
      <div class="pdp-detail"><span>Schnitt</span><p>${p.fit}</p></div>
      <div class="pdp-detail"><span>Pflege</span><p>Kalt waschen, auf links. Lufttrocknen. Schwarz bleibt Schwarz.</p></div>
    </div>
  </div>`;

document.querySelectorAll('.size').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('.size').forEach(x=>x.classList.remove('sel'));
    b.classList.add('sel'); selSize=b.dataset.size;
    const add=document.getElementById('add'); add.disabled=false; add.textContent='In die Bag';
  });
});
document.getElementById('add').addEventListener('click',()=>{
  if(!selSize) return;
  Cart.add(p.id, selSize);
  const add=document.getElementById('add');
  add.textContent='Hinzugefügt ✓';
  setTimeout(()=>{add.textContent='In die Bag';},1400);
  openCart();
});
Cart.render();
