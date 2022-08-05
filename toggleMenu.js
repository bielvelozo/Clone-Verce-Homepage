const menu = document.querySelector(".menu-toggle")
const section = document.querySelector(".menu-section")

let state = true

menu.addEventListener('click' , () => {

    document.body.style.overflow = state ? 'hidden' : 'initial'

    section.classList.toggle("on" ,  state)
    state = !state
})