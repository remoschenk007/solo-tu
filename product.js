const params = new URLSearchParams(location.search);
const pid = params.get('id') || 'st-001';
const p = PRODUCTS.find(x=>x.id===pid) || PRODUCTS[0];
document.title = `${p.name} — solo tu`;
let selSize = null;

document.getElementById('pdp').innerHTML = `
  <div class="pdp-visual">${teeSVG(p.tee)}</div>
  <div class="pdp-info">
    <a href="shop.html" class="pdp-back">← All pieces</a>
    <div class="pdp-cut">${p.cut}${p.tag?` · ${p.tag}`:''}</div>
    <h1 class="pdp-name">${p.name}</h1>
    <p class="pdp-poem">${p.poem}</p>
    <div class="pdp-price">CHF ${p.price}</div>
    <div class="pdp-label">Size</div>
    <div class="pdp-sizes">${p.sizes.map(s=>`<button class="size" data-size="${s}">${s}</button>`).join('')}</div>
    <button class="pdp-add" id="add" disabled>Select size</button>
    <p class="pdp-hint">Single piece · while it lasts</p>
    <div class="pdp-details">
      <div class="pdp-detail"><span>Fabric</span><p>${p.fabric}</p></div>
      <div class="pdp-detail"><span>Cut</span><p>${p.fit}</p></div>
      <div class="pdp-detail"><span>Care</span><p>Cold wash, inside out. Air dry. Black stays black.</p></div>
    </div>
  </div>`;

document.querySelectorAll('.size').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('.size').forEach(x=>x.classList.remove('sel'));
    b.classList.add('sel'); selSize=b.dataset.size;
    const add=document.getElementById('add'); add.disabled=false; add.textContent='Add to bag';
  });
});
document.getElementById('add').addEventListener('click',()=>{
  if(!selSize) return;
  Cart.add(p.id, selSize);
  const add=document.getElementById('add');
  add.textContent='Added ✓';
  setTimeout(()=>{add.textContent='Add to bag';},1400);
  openCart();
});
Cart.render();
