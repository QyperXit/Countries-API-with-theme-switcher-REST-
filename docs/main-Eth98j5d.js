import"./card-2IZJD25H.js";const r=document.getElementById("regionFilter"),h=r.querySelector(".selected-option"),i=r.querySelector(".options"),v=r.querySelectorAll(".options li");h.addEventListener("click",function(){i.style.display=i.style.display==="block"?"none":"block"});v.forEach(t=>{t.addEventListener("click",function(){h.textContent=t.textContent,i.style.display="none";const o=t.getAttribute("data-value");document.querySelectorAll(".card").forEach(l=>{const u=l.querySelector(".region span").textContent.toLowerCase();o==="all"||u===o?l.style.display="block":l.style.display="none"})})});document.addEventListener("click",function(t){r.contains(t.target)||(i.style.display="none")});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".card-grid"),o=document.querySelector(".input"),s=document.getElementById("regionFilter");fetch("https://restcountries.com/v3.1/all").then(e=>e.json()).then(e=>{e.forEach(c=>{l(c)}),o.addEventListener("keyup",u),s.addEventListener("change",E)});function l(e){const c=document.createElement("div");c.classList.add("card");const n=document.createElement("div");n.classList.add("country-box");const a=document.createElement("img");a.src=e.flags.svg||e.flags.png||"",a.alt=`${e.name.common}-flag`;const p=document.createElement("div");p.classList.add("country-details");const d=document.createElement("div");d.classList.add("nation");const f=document.createElement("h1");f.textContent=e.name.common;const m=document.createElement("div");m.classList.add("population");const C=new Intl.NumberFormat().format(e.population);m.innerHTML=`Population: <span>${C}</span>`;const y=document.createElement("div");y.classList.add("region"),y.innerHTML=`Region: <span>${e.region}</span>`;const g=document.createElement("div");g.classList.add("capital"),g.innerHTML=`Capital: <span>${e.capital}</span>`,d.appendChild(f),d.appendChild(m),d.appendChild(y),d.appendChild(g),p.appendChild(d),n.appendChild(a),n.appendChild(p),c.appendChild(n),t.appendChild(c)}function u(){const e=o.value.toLowerCase();document.querySelectorAll(".card").forEach(n=>{n.querySelector(".nation h1").textContent.toLowerCase().includes(e)?n.style.display="block":n.style.display="none"})}function E(){const e=s.querySelector(".selected-option").textContent;document.querySelectorAll(".card").forEach(n=>{const a=n.querySelector(".region span").textContent;e==="Filter by Region"||a===e?n.style.display="block":n.style.display="none"})}});document.addEventListener("DOMContentLoaded",function(){const t=document.body,o=document.querySelector(".darkMode"),s=localStorage.getItem("darkMode")==="true";t.classList.toggle("dark-mode",s),L(s),o.addEventListener("click",function(){t.classList.toggle("dark-mode"),localStorage.setItem("darkMode",t.classList.contains("dark-mode")),L(t.classList.contains("dark-mode"))})});function L(t){const o=document.querySelector(".fa-moon");t?o.classList.replace("fa-regular","fa-solid"):o.classList.replace("fa-solid","fa-regular")}const k=document.querySelector(".logo");k.addEventListener("click",()=>{window.location.href="/CountriesRest-Api/index.html"});