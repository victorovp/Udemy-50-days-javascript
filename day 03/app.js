const open = document.getElementById('open')
const close = document.getElementById('close')

open.addEventListener('click',() =>{
    document.querySelector('.container').classList.add('show_nav')
    document.querySelector('nav').classList.add('show_nav')
})

close.addEventListener('click',() =>{
    document.querySelector('.container').classList.remove('show_nav')
    document.querySelector('nav').classList.remove('show_nav')
})