function applyLanguage(lang){
 const dict=window[lang];
 if(!dict)return;
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-lang]').forEach(el=>{
  const k=el.dataset.lang;
  if(dict[k]) el.textContent=dict[k];
 });
 document.querySelectorAll('.language-switcher button').forEach(b=>{
  b.classList.toggle('active',b.dataset.language===lang);
 });
 localStorage.setItem('lang',lang);
}
document.addEventListener('DOMContentLoaded',()=>{
 const saved=localStorage.getItem('lang')||'en';
 applyLanguage(saved);
 document.querySelectorAll('.language-switcher button').forEach(b=>{
  b.onclick=()=>applyLanguage(b.dataset.language);
 });
});