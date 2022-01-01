import '../css/style.css'
import lol from './btn.js'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>

  <button id="btn">0</button>
`

lol()
