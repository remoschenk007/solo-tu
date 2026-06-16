const grid = document.getElementById('shop-grid');
const countEl = document.getElementById('shop-count');
let active = 'all';

function teeType(p){ return p.tee==='crop'?'boxy':p.tee==='pocket'?'regular':p.tee; }

function renderShop(){
  const list = PRODUCTS.filter(p=> active==='all' || teeType(p)===active);
  grid.innerHTML = list.map(cardHTML).join('');
  countEl.textContent = `${list.length} Stück${list.length!==1?'e':''}`;
}
document.querySelectorAll('.filter').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
    b.classList.add('active'); active=b.dataset.filter; renderShop();
  });
});
renderShop();

/* cart drawer controls */
function openCart(){ document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open'); renderCartPanel(); }
function closeCart(){ document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open'); }
function renderCartPanel(){
  const box=document.getElementById('cart-items');
  if(!box) return;
  if(Cart.items.length===0){ box.innerHTML='<p class="cart-empty">Noch leer.<br>Such dir dein Schwarz.</p>'; }
  else{
    box.innerHTML = Cart.items.map(it=>`<div class="cart-line">
      <div><div class="cart-line-name">${it.name}</div>
      <div class="cart-line-meta">Grösse ${it.size} · ×${it.qty}</div></div>
      <div class="cart-line-right"><span class="cart-line-price">CHF ${it.price*it.qty}</span>
      <button class="cart-line-rm" onclick="Cart.remove('${it.id}','${it.size}')">entfernen</button></div>
    </div>`).join('');
  }
  document.getElementById('cart-total').textContent=`CHF ${Cart.total()}`;
}
function checkout(){
  if(Cart.items.length===0) return;
  alert('Checkout folgt — hier wird Stripe / Supabase angebunden.');
}
window.openCart=openCart;window.closeCart=closeCart;window.renderCartPanel=renderCartPanel;window.checkout=checkout;
