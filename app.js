"use strict";
/* Development-only example models. Never describe these as live stock. */
const exampleModels=[
 {brand:"JETOUR",name:"JETOUR T2 / Traveller",desc:"SUV • Configuration on request",tags:["suv","petrol"],type:"SUV"},
 {brand:"CHANGAN",name:"Changan UNI-Z",desc:"SUV • Hybrid options",tags:["suv","hybrid"],type:"SUV"},
 {brand:"BYD",name:"BYD Qin PLUS",desc:"Sedan • Hybrid options",tags:["sedan","hybrid"],type:"SEDAN"},
 {brand:"CHERY",name:"Chery Tiggo 8",desc:"SUV • Specification on request",tags:["suv","petrol"],type:"SUV"},
 {brand:"GEELY",name:"Geely SUV Range",desc:"SUV • Ask for available models",tags:["suv","petrol"],type:"SUV"},
 {brand:"MG",name:"MG ZS",desc:"SUV • Petrol options",tags:["suv","petrol"],type:"SUV"}
];
const carSVG='<svg class="car-drawing" viewBox="0 0 440 180" aria-hidden="true"><ellipse cx="220" cy="156" rx="178" ry="12" fill="#000" opacity=".25"/><path d="M38 117 L68 94 L126 88 L165 47 Q173 37 195 37 L310 41 Q323 45 335 58 L371 94 L403 105 Q415 110 414 132 L399 144 L40 143 L28 133 Z" fill="#bfcbd1" stroke="#f0f5f5" stroke-width="2"/><path d="M171 55 Q177 49 197 49 L304 52 Q311 54 321 63 L344 92 L134 91 Z" fill="#293c4d" stroke="#718999" stroke-width="4"/><path d="M238 51 L245 91" stroke="#c5d1d8" stroke-width="4"/><path d="M40 118 L86 114 M360 112 L398 119" stroke="#eef2f5" stroke-width="8" stroke-linecap="round"/><path d="M50 134 H393" stroke="#536574" stroke-width="5"/><circle cx="112" cy="141" r="30" fill="#101b28" stroke="#576877" stroke-width="3"/><circle cx="112" cy="141" r="17" fill="#bac3ca" stroke="#203343" stroke-width="5"/><circle cx="343" cy="141" r="30" fill="#101b28" stroke="#576877" stroke-width="3"/><circle cx="343" cy="141" r="17" fill="#bac3ca" stroke="#203343" stroke-width="5"/></svg>';
const grid=document.getElementById("vehicle-grid");
const filterButtons=[...document.querySelectorAll("[data-filter]")];
function showModels(filter="all"){
 const shown=exampleModels.filter(car=>filter==="all"||car.tags.includes(filter));
 grid.replaceChildren();
 shown.forEach(car=>{
  const article=document.createElement("article");article.className="vehicle-card";
  const visual=document.createElement("div");visual.className="vehicle-visual";visual.innerHTML=carSVG;
  const tag=document.createElement("span");tag.className="vehicle-tag";tag.textContent=car.type;visual.appendChild(tag);
  const content=document.createElement("div");content.className="vehicle-content";
  const small=document.createElement("small");small.textContent=car.brand;
  const title=document.createElement("h3");title.textContent=car.name;
  const desc=document.createElement("p");desc.textContent=car.desc;
  const bottom=document.createElement("div");bottom.className="vehicle-card-bottom";
  const note=document.createElement("span");note.textContent="Request latest quote";
  const btn=document.createElement("button");btn.type="button";btn.textContent="Inquire ↗";btn.setAttribute("aria-label","Ask about "+car.name);
  btn.addEventListener("click",()=>{document.getElementById("model").value=car.name;document.getElementById("inquiry").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});});
  bottom.append(note,btn);content.append(small,title,desc,bottom);article.append(visual,content);grid.appendChild(article);
 });
}
filterButtons.forEach(btn=>btn.addEventListener("click",()=>{filterButtons.forEach(b=>{b.classList.remove("active");b.setAttribute("aria-pressed","false")});btn.classList.add("active");btn.setAttribute("aria-pressed","true");showModels(btn.dataset.filter);}));
showModels();
document.getElementById("year").textContent=String(new Date().getFullYear());
const menu=document.getElementById("menu-toggle");const links=document.getElementById("nav-links");
menu.addEventListener("click",()=>{const opened=links.classList.toggle("open");menu.setAttribute("aria-expanded",String(opened))});
links.addEventListener("click",e=>{if(e.target.closest("a")){links.classList.remove("open");menu.setAttribute("aria-expanded","false")}});
document.getElementById("quote-form").addEventListener("submit",event=>{
 event.preventDefault();
 const form=event.currentTarget;
 const model=form.elements.namedItem("model").value.trim();
 const destination=form.elements.namedItem("destination").value;
 const quantity=form.elements.namedItem("quantity").value;
 const customer=form.elements.namedItem("customer").value;
 const notes=form.elements.namedItem("notes").value.trim();
 const feedback=document.getElementById("quote-feedback");
 if(!model||!destination){feedback.textContent="Please enter a vehicle model and select a destination country.";return;}
 const summary=["DG MOTORS vehicle inquiry","Model: "+model,"Quantity: "+quantity,"Destination: "+destination,"Customer type: "+customer,notes?"Requirements: "+notes:""].filter(Boolean).join("\n");
 const copy=async()=>{try{await navigator.clipboard.writeText(summary);feedback.textContent="Inquiry details copied. A secure submission channel has not yet been connected; no information was sent."; }catch{feedback.textContent="Preview only — nothing was sent or saved. Please contact DG MOTORS through a verified business channel.";}};
 copy();
});