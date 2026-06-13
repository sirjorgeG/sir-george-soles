
fetch('products.json')
.then(r=>r.json())
.then(products=>{
 let html='';
 products.forEach(p=>{
  html+=`<div class="card">
  <img src="${p.image}" alt="">
  <h3>${p.name}</h3>
  <p class="price">£${p.price}</p>
  <a class="btn" target="_blank"
  href="https://wa.me/447713609082?text=I'm interested in ${encodeURIComponent(p.name)}">
  Enquire
  </a></div>`;
 });
 const p=document.getElementById('products');
 const f=document.getElementById('featured-products');
 if(p) p.innerHTML=html;
 if(f) f.innerHTML=html;
});
