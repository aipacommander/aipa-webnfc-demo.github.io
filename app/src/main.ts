import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import { doPost } from './do-post.ts'
import { setupWebNFC } from '../types/web-nfc.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
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
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// doPost(document.querySelector<HTMLButtonElement>('#do-post')!)
// !は非nullアサーションオペレーター（Non-null assertion operator）
// nullではないことを示す
setupWebNFC(document.querySelector<HTMLButtonElement>('#scan-button')!)