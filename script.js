const phoneColors=[
  {name:"Preto",hex:"#333333",filter:"grayscale(.55) brightness(.78)"},
  {name:"Prateado",hex:"#dedede",filter:"grayscale(.55) brightness(1.08)"},
  {name:"Azul",hex:"#71849a",filter:"hue-rotate(165deg) saturate(.5)"},
  {name:"Natural",hex:"#aaa79f",filter:"grayscale(.25) sepia(.08)"}
];

function iphone(id,name,storage,prices,grades,category="seminovo",description="Aparelho Apple selecionado para diferentes momentos e orçamentos.") {
  const isNew=category==="iphone-novo";
  return {
    id,name,category,
    type:isNew?"Novo · confira a garantia da unidade":"Seminovo · condição por unidade",
    storage,prices,grades,description,
    image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=85",
    colors:phoneColors,
    badge:isNew?"Preço consultado":"Seminovo · grade informada",
    battery:isNew?"":"Condição e saúde da bateria variam por unidade."
  };
}

const products = [
  iphone("iphone-18-pro","iPhone 18 Pro",["256 GB","512 GB","1 TB"],[11999,13499,16499],["Lacrado","Lacrado","Lacrado"],"iphone-novo","Linha Pro atual, para quem procura um iPhone premium."),
  iphone("iphone-18-pro-max","iPhone 18 Pro Max",["256 GB","512 GB","1 TB","2 TB"],[12999,14499,17499,21999],["Lacrado","Lacrado","Lacrado","Lacrado"],"iphone-novo","Tela ampla e armazenamento para uma biblioteca inteira."),
  iphone("iphone-17","iPhone 17",["256 GB","512 GB"],[8089,8399],["Lacrado","Lacrado"],"iphone-novo","Uma geração atual para fotos, trabalho e entretenimento."),
  iphone("iphone-17-pro","iPhone 17 Pro",["256 GB","512 GB","1 TB"],[8009,8799,9939],["Excelente","Excelente","Excelente"],"seminovo","Câmeras e desempenho Pro, em diferentes capacidades."),
  iphone("iphone-17-pro-max","iPhone 17 Pro Max",["256 GB","512 GB","1 TB"],[9219,9659,10769],["Excelente","Excelente","Excelente"],"seminovo","Tela grande e experiência Pro em um aparelho revisado."),
  iphone("iphone-16","iPhone 16",["128 GB"],[5749],["Lacrado"],"iphone-novo","Um modelo atual e versátil para o dia a dia."),
  iphone("iphone-16-pro","iPhone 16 Pro",["128 GB","256 GB","512 GB","1 TB"],[5889,6059,7179,7269],["Bom","Bom","Excelente","Muito bom"],"seminovo","Titânio e sistema de câmeras Pro."),
  iphone("iphone-16-pro-max","iPhone 16 Pro Max",["256 GB","512 GB","1 TB"],[6309,6799,7619],["Muito bom","Bom","Bom"],"seminovo","Tela ampla, construção premium e armazenamento generoso."),
  iphone("iphone-15","iPhone 15",["128 GB","256 GB","512 GB"],[2979,3589,5099],["Outlet","Bom","Excelente"],"seminovo","Dynamic Island e câmera principal de 48 MP."),
  iphone("iphone-15-pro","iPhone 15 Pro",["128 GB","256 GB","512 GB"],[4119,4979,5209],["Excelente","Excelente","Muito bom"],"seminovo","Titânio e recursos de câmera para quem cria."),
  iphone("iphone-15-pro-max","iPhone 15 Pro Max",["256 GB","512 GB"],[4849,5659],["Muito bom","Muito bom"],"seminovo","Tela grande, acabamento em titânio e câmera Pro."),
  iphone("iphone-14","iPhone 14",["128 GB","256 GB"],[2589,2889],["Bom","Bom"],"seminovo","Uma opção equilibrada para entrar no ecossistema Apple."),
  iphone("iphone-14-pro","iPhone 14 Pro",["256 GB","512 GB","1 TB"],[3629,4209,5169],["Bom","Bom","Muito bom"],"seminovo","Tela Pro e conjunto de câmeras avançado."),
  iphone("iphone-14-pro-max","iPhone 14 Pro Max",["128 GB","256 GB","512 GB","1 TB"],[4049,4089,4749,5109],["Muito bom","Bom","Bom","Bom"],"seminovo","Formato Max com várias opções de armazenamento."),
  iphone("iphone-13","iPhone 13",["128 GB","256 GB","512 GB"],[2189,2439,2939],["Bom","Bom","Muito bom"],"seminovo","Uma opção de entrada para tarefas e fotos do cotidiano."),
  iphone("iphone-13-pro","iPhone 13 Pro",["128 GB","256 GB","512 GB","1 TB"],[2989,2359,3369,4009],["Muito bom","Outlet","Bom","Muito bom"],"seminovo","Recursos Pro em uma geração com ótimo custo-benefício."),
  iphone("iphone-13-pro-max","iPhone 13 Pro Max",["128 GB","256 GB","512 GB"],[3369,2809,4039],["Excelente","Outlet","Muito bom"],"seminovo","Tela Max e opções para diferentes faixas de preço."),
  iphone("iphone-12","iPhone 12",["64 GB","128 GB","256 GB"],[1469,1629,2189],["Bom","Bom","Excelente"],"seminovo","A porta de entrada para a linha iPhone."),
  iphone("iphone-12-pro","iPhone 12 Pro",["128 GB","256 GB","512 GB"],[1799,2399,2799],["Outlet","Bom","Bom"],"seminovo","Acabamento Pro e armazenamento para sua rotina."),
  {id:"apple-watch",name:"Apple Watch",category:"watch",type:"Modelos e tamanhos sob consulta",storage:["Consultar modelo"],prices:[null],grades:["Consultar"],description:"Relógios Apple selecionados conforme disponibilidade.",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",colors:[{name:"Consultar cores",hex:"#aaa79f",filter:""}],badge:"Consulte disponibilidade"},
  {id:"airpods-pro",name:"AirPods",category:"audio",type:"Modelos sob consulta",storage:["Consultar modelo"],prices:[null],grades:["Consultar"],description:"Encontre o modelo de AirPods compatível com seu uso.",image:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=85",colors:[{name:"Branco",hex:"#eeece7",filter:""}],badge:"Consulte disponibilidade"},
  {id:"acessorios",name:"Acessórios premium",category:"acessorio",type:"Seleção sob consulta",storage:["Consultar modelos"],prices:[null],grades:["Consultar"],description:"Capas, carregadores e proteção para o seu aparelho.",image:"https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=700&q=85",colors:[{name:"Consultar cores",hex:"#aaa79f",filter:""}],badge:"Consulte disponibilidade"}
];

const money = new Intl.NumberFormat("pt-BR", {style:"currency", currency:"BRL", maximumFractionDigits:0});
const grid = document.querySelector("#product-grid");
const cart = [];
let activeFilter = "todos";
let searchTerm = "";
let tradeCondition = 1;
let reviewPosition = 0;
let toastTimer;

function renderProducts() {
  document.querySelectorAll("[data-category-count]").forEach(counter=>{
    const category=counter.dataset.categoryCount;
    const count=category==="todos"?products.length:products.filter(product=>product.category===category).length;
    counter.textContent=String(count).padStart(2,"0");
  });
  const matching = products.filter(product => {
    const matchesFilter = activeFilter === "todos" || product.category === activeFilter;
    const matchesSearch = `${product.name} ${product.type} ${product.category}`.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  document.querySelector("#visible-count").textContent = String(matching.length).padStart(2,"0");
  grid.innerHTML = matching.map((product,index) => `
    <article class="product-card" data-product="${product.id}" style="animation-delay:${index*55}ms">
      <div class="product-image-wrap">
        <span class="product-badge">${product.badge}</span>
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.prices[0]===null?"":`<button class="product-quick-add" data-add="${product.id}" aria-label="Adicionar ${product.name} à sacola"><svg><use href="#i-bag"/></svg></button>`}
      </div>
      <div class="product-info">
        <div class="product-meta"><h3>${product.name}</h3><span class="product-status">${product.grades?.[0] || "Consultar"}</span></div>
        <p class="product-subtitle">${product.type}</p>
        <p class="product-description">${product.description}</p>
        <div class="color-row" aria-label="Escolha a cor">${product.colors.map((color,index) => `<button class="color-swatch${index === 0 ? " selected" : ""}" style="background:${color.hex}" data-color="${index}" aria-label="${color.name}" aria-pressed="${index===0}"></button>`).join("")}<span class="color-name">${product.colors[0].name}</span></div>
        <select class="storage-select" aria-label="Escolha armazenamento">${product.storage.map((storage,index) => `<option value="${index}">${storage}${product.grades?.[index] && product.grades[index] !== "Lacrado" ? ` · ${product.grades[index]}` : ""}</option>`).join("")}</select>
        ${product.battery ? `<p class="battery-note">${product.battery}</p>` : ""}
        <div class="product-price"><strong>${product.prices[0]===null?"Consulte":money.format(product.prices[0])}</strong><span>${product.prices[0]===null?"":"preço de referência"}</span></div>
        <div class="product-installments">${product.prices[0]===null?"Confirme modelo e valor pelo WhatsApp":"Parcelamento e disponibilidade sob consulta"}</div>
        <button class="product-buy" data-buy="${product.id}">${product.prices[0]===null?"Consultar modelos":"Comprar via WhatsApp"} <svg><use href="#i-arrow"/></svg></button>
      </div>
    </article>`).join("");
  if (!matching.length) grid.innerHTML = '<div class="no-results">Não encontramos esse modelo. <a href="https://wa.me/5511999999999">Fale com a gente</a> — podemos ajudar.</div>';
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"),2400);
}

function updateCart() {
  document.querySelector(".cart-count").textContent = cart.reduce((total,item) => total+item.quantity,0);
  const container = document.querySelector(".cart-items");
  const total = cart.reduce((sum,item) => sum+item.price*item.quantity,0);
  document.querySelector(".cart-total strong").textContent = money.format(total);
  const checkout = document.querySelector(".cart-checkout");
  if (!cart.length) {
    container.innerHTML = '<div class="cart-empty"><svg><use href="#i-bag"/></svg><strong>Sua sacola está esperando.</strong><span>Encontre seu próximo favorito na coleção.</span></div>';
    checkout.classList.add("disabled");
    checkout.href="#";
    return;
  }
  checkout.classList.remove("disabled");
  const message = cart.map(item=>`${item.quantity}x ${item.name} · ${item.storage} · ${item.quality} · ${item.color}`).join("\n");
  checkout.href=`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá! Quero finalizar minha seleção:\n${message}\nTotal estimado: ${money.format(total)}`)}`;
  container.innerHTML=cart.map((item,index)=>`<div class="cart-item"><img src="${item.image}" alt=""><div class="cart-item-info"><strong>${item.name}</strong><small>${item.storage} · ${item.color} · qtd. ${item.quantity}</small><button class="cart-remove" data-remove="${index}">Remover</button></div><span class="cart-item-price">${money.format(item.price*item.quantity)}</span></div>`).join("");
}

function addToCart(product, card) {
  const storageIndex=Number(card.querySelector(".storage-select").value);
  const colorIndex=Number(card.querySelector(".color-swatch.selected")?.dataset.color || 0);
  const color=product.colors[colorIndex].name;
  const storage=product.storage[storageIndex];
  const existing=cart.find(item=>item.id===product.id && item.storage===storage && item.color===color);
  if (existing) existing.quantity++;
  else cart.push({id:product.id,name:product.name,image:product.image,storage,quality:product.grades?.[storageIndex]||"novo",color,price:product.prices[storageIndex],quantity:1});
  updateCart();
  showToast(`${product.name} adicionado à sacola`);
}

grid.addEventListener("click",event=>{
  const card=event.target.closest(".product-card");
  if(!card)return;
  const product=products.find(item=>item.id===card.dataset.product);
  const colorButton=event.target.closest(".color-swatch");
  if(colorButton){
    card.querySelectorAll(".color-swatch").forEach(button=>{button.classList.remove("selected");button.setAttribute("aria-pressed","false")});
    colorButton.classList.add("selected");colorButton.setAttribute("aria-pressed","true");
    card.querySelector(".color-name").textContent=product.colors[Number(colorButton.dataset.color)].name;
    card.querySelector(".product-image").style.filter=product.colors[Number(colorButton.dataset.color)].filter;
  }
  if(event.target.closest("[data-add]"))addToCart(product,card);
  if(event.target.closest("[data-buy]")){
    const storageIndex=Number(card.querySelector(".storage-select").value);
    const color=product.colors[Number(card.querySelector(".color-swatch.selected")?.dataset.color||0)].name;
    const quality=product.grades?.[storageIndex]||"condição a confirmar";
    const message=encodeURIComponent(`Olá! Tenho interesse no ${product.name}, ${product.storage[storageIndex]}, condição ${quality}, na cor ${color}. Pode confirmar estoque, estado e preço atualizado?`);
    window.open(`https://wa.me/5511999999999?text=${message}`,"_blank","noopener,noreferrer");
  }
});

grid.addEventListener("change",event=>{
  if(!event.target.matches(".storage-select"))return;
  const card=event.target.closest(".product-card");
  const product=products.find(item=>item.id===card.dataset.product);
  const index=Number(event.target.value);
  const price=product.prices[index];
  card.querySelector(".product-price strong").textContent=price===null?"Consulte":money.format(price);
  card.querySelector(".product-status").textContent=product.grades?.[index]||"Consultar";
  card.querySelector(".product-price span").textContent=price===null?"":"preço de referência";
  card.querySelector(".product-installments").textContent=price===null?"Confirme modelo e valor pelo WhatsApp":"Parcelamento e disponibilidade sob consulta";
});

document.querySelector(".category-tabs").addEventListener("click",event=>{
  const tab=event.target.closest(".category-tab");
  if(!tab)return;
  activeFilter=tab.dataset.filter;
  document.querySelectorAll(".category-tab").forEach(button=>{button.classList.toggle("active",button===tab);button.setAttribute("aria-selected",String(button===tab))});
  renderProducts();
});

document.querySelectorAll("[data-nav-filter]").forEach(link=>link.addEventListener("click",()=>{
  activeFilter=link.dataset.navFilter;
  document.querySelectorAll(".category-tab").forEach(tab=>{const active=tab.dataset.filter===activeFilter;tab.classList.toggle("active",active);tab.setAttribute("aria-selected",String(active))});
  renderProducts();
}));

const searchPanel=document.querySelector(".search-panel");
document.querySelector(".search-toggle").addEventListener("click",()=>{
  searchPanel.classList.toggle("open");
  if(searchPanel.classList.contains("open"))document.querySelector("#search-input").focus();
});
document.querySelector(".search-close").addEventListener("click",()=>searchPanel.classList.remove("open"));
document.querySelector("#search-input").addEventListener("input",event=>{
  searchTerm=event.target.value.trim();
  activeFilter="todos";
  document.querySelectorAll(".category-tab").forEach(tab=>{const active=tab.dataset.filter==="todos";tab.classList.toggle("active",active);tab.setAttribute("aria-selected",String(active))});
  renderProducts();
});

const drawer=document.querySelector(".cart-drawer");
function setCartOpen(open){
  drawer.classList.toggle("open",open);
  document.querySelector(".cart-overlay").classList.toggle("open",open);
  drawer.setAttribute("aria-hidden",String(!open));
  document.body.classList.toggle("drawer-open",open);
}
document.querySelector(".cart-toggle").addEventListener("click",()=>setCartOpen(true));
document.querySelector(".cart-close").addEventListener("click",()=>setCartOpen(false));
document.querySelector(".cart-overlay").addEventListener("click",()=>setCartOpen(false));
document.querySelector(".cart-items").addEventListener("click",event=>{
  const button=event.target.closest("[data-remove]");
  if(!button)return;
  cart.splice(Number(button.dataset.remove),1);
  updateCart();
});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){setCartOpen(false);searchPanel.classList.remove("open")}});

document.querySelectorAll(".condition-option").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".condition-option").forEach(option=>option.classList.toggle("selected",option===button));
  tradeCondition=Number(button.dataset.condition);
  document.querySelector(".trade-result").classList.remove("visible");
}));
document.querySelector("#trade-submit").addEventListener("click",()=>{
  const model=document.querySelector("#trade-model").value;
  const result=document.querySelector(".trade-result");
  if(!model){showToast("Selecione o modelo do seu iPhone para continuar.");document.querySelector("#trade-model").focus();return}
  const estimate=Math.round(Number(model)*tradeCondition/100)*100;
  result.innerHTML=`<span>Estimativa inicial do seu aparelho</span><strong>${money.format(estimate)} até</strong><small>Vamos confirmar cada detalhe com você pelo WhatsApp.</small>`;
  result.classList.add("visible");
});

const reviewTrack=document.querySelector("#review-track");
function moveReviews(direction){
  const card=reviewTrack.querySelector(".review-card");
  if(!card)return;
  const visible=window.innerWidth<=720?1:window.innerWidth<=1000?2:3;
  const max=Math.max(0,reviewTrack.children.length-visible);
  reviewPosition=Math.max(0,Math.min(max,reviewPosition+direction));
  reviewTrack.style.transform=`translateX(-${reviewPosition*(card.getBoundingClientRect().width+14)}px)`;
}
document.querySelector(".review-next").addEventListener("click",()=>moveReviews(1));
document.querySelector(".review-prev").addEventListener("click",()=>moveReviews(-1));
window.addEventListener("resize",()=>{reviewPosition=0;reviewTrack.style.transform="translateX(0)"});

const menuToggle=document.querySelector(".mobile-menu-toggle");
const mobileNav=document.querySelector(".mobile-nav");
menuToggle.addEventListener("click",()=>{
  const open=mobileNav.classList.toggle("open");
  menuToggle.setAttribute("aria-label",open?"Fechar menu":"Abrir menu");
  menuToggle.innerHTML=`<svg><use href="${open?"#i-close":"#i-menu"}"/></svg>`;
});
mobileNav.addEventListener("click",event=>{
  if(event.target.closest("a")){mobileNav.classList.remove("open");menuToggle.setAttribute("aria-label","Abrir menu");menuToggle.innerHTML='<svg><use href="#i-menu"/></svg>'}
});

if("IntersectionObserver" in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}
  }),{threshold:.12,rootMargin:"0px 0px -25px 0px"});
  document.querySelectorAll(".reveal").forEach(element=>observer.observe(element));
}else{
  document.querySelectorAll(".reveal").forEach(element=>element.classList.add("visible"));
}

renderProducts();
updateCart();
