/* solo tu — interactions + cart */
const Cart = {
  items: JSON.parse(sessionStorage.getItem('solotu_cart') || '[]'),
  save(){ sessionStorage.setItem('solotu_cart', JSON.stringify(this.items)); this.render(); },
  add(id,size){ const p=PRODUCTS.find(x=>x.id===id);
    const f=this.items.find(x=>x.id===id&&x.size===size);
    if(f)f.qty++; else this.items.push({id,size,qty:1,name:p.name,price:p.price}); this.save(); },
  remove(id,size){ this.items=this.items.filter(x=>!(x.id===id&&x.size===size)); this.save(); },
  count(){ return this.items.reduce((n,x)=>n+x.qty,0); },
  total(){ return this.items.reduce((n,x)=>n+x.qty*x.price,0); },
  render(){ document.querySelectorAll('#bag-count').forEach(el=>el.textContent=`(${this.count()})`);
    if(document.getElementById('cart-items')) renderCartPanel(); }
};

const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.14});
document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

const fg=document.getElementById('featured-grid');
if(fg) PRODUCTS.slice(0,3).forEach(p=>fg.insertAdjacentHTML('beforeend',cardHTML(p)));

function cardHTML(p){
  return `<a class="card" href="product.html?id=${p.id}">
    <div class="card-img" data-ph="${p.name} · Produktfoto">${p.tag?`<span class="card-tag">${p.tag}</span>`:''}</div>
    <div class="card-meta">
      <div class="card-name">${p.name}</div>
      <div class="card-row"><span class="card-cut">${p.cut}</span><span class="card-price">CHF ${p.price}</span></div>
    </div></a>`;
}
Cart.render();
