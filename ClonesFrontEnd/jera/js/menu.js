const btn = document.querySelector('a#btn')

btn.addEventListener('click', toggleMenu => {
    let nav = document.getElementById('nav')
    nav.classList.toggle('active')
})

const btn_close = document.querySelector('a#btn-close')
btn_close.addEventListener('click', toggleMenu => {
    let nav = document.getElementById('nav')
    nav.classList.remove('active')
})