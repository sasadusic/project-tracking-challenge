const hamburger = document.querySelector('#hamburger')
const nav = document.querySelector('.nav-right')

hamburger.onclick = () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('nav-active')
}