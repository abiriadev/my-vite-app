let c = 0

export default () => {
    document.getElementById('btn').addEventListener('click', ev => {
        c += 1

        ev.target.innerText = c
    })
}

import '../css/btn.css'
