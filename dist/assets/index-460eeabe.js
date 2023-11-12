(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const i="/aipa-webnfc-demo.github.io/dist/assets/typescript-f6ead1af.svg",a="/aipa-webnfc-demo.github.io/dist/vite.svg";function d(n){let o=0;const t=s=>{o=s,n.innerHTML=`count is ${o}`};n.addEventListener("click",()=>t(o+1)),t(0)}const l=async n=>{const e=await await fetch("https://script.google.com/macros/s/AKfycbwjYRvhAQ0tt1enPe_BkS1UN5SUHknJtCeRcyUacOAstS5fVkaJi6xbMSqc6eCg_zt-/exec",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:"BBtGOmbmwikr6vr0XzAip0G5",text:n})});console.log(e)},u=async n=>{const t=new TextDecoder().decode(n.message.records[0].data);console.log(t),await l(t)},p=(n,o)=>{"NDEFReader"in window||console.log("Web NFC is not available. Use Chrome on Android."),n.addEventListener("click",async()=>{console.log("User clicked scan button");try{const t=new NDEFReader;await t.scan(),console.log("> Scan started"),t.addEventListener("readingerror",()=>{console.log("Argh! Cannot read data from the NFC tag. Try another one?")}),t.addEventListener("reading",s=>{const e=s;alert(`> Serial Number: ${e.serialNumber}`),alert(`> Records: (${e.message.records.length})`),console.log(e),o(e)})}catch(t){console.log("Argh! "+t)}})};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${a}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${i}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <p class="read-the-docs">
      <button id="scan-button" type="button">NFC Scan</button>
    </p>
  </div>
`;d(document.querySelector("#counter"));p(document.querySelector("#scan-button"),u);
