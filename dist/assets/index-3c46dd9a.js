(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const i="/aipa-webnfc-demo.github.io/dist/assets/typescript-f6ead1af.svg",a="/aipa-webnfc-demo.github.io/dist/vite.svg";function l(s){let t=0;const n=r=>{t=r,s.innerHTML=`count is ${t}`};s.addEventListener("click",()=>n(t+1)),n(0)}const d=s=>{"NDEFReader"in window||console.log("Web NFC is not available. Use Chrome on Android."),s.addEventListener("click",async()=>{console.log("User clicked scan button");try{const t=new NDEFReader;await t.scan(),console.log("> Scan started"),t.addEventListener("readingerror",()=>{console.log("Argh! Cannot read data from the NFC tag. Try another one?")}),t.addEventListener("reading",n=>{const r=n;alert(`> Serial Number: ${r.serialNumber}`),alert(`> Records: (${r.message.records.length})`),console.log(r)})}catch(t){console.log("Argh! "+t)}})};document.querySelector("#app").innerHTML=`
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
      <button id="do-post" type="button">Click on the Vite and TypeScript logos to learn more</button>
    </p>
    <p class="read-the-docs">
      <button id="scan-button" type="button">NFC Scan</button>
    </p>
  </div>
`;l(document.querySelector("#counter"));d(document.querySelector("#scan-button"));
