const   nxt     = document.getElementById('next')
const   prev     = document.getElementById('prev')
const   circle  = document.querySelectorAll('.circle')
const   progress = document.getElementById('progress')
let currentPosition = 1;

nxt.addEventListener('click',() => {
    let circle_active = document.querySelectorAll('.active')
    
    currentPosition++
    if(currentPosition >= circle.length)
    {
        nxt.disabled = true
        currentPosition = circle.length;
        
    }
    if(currentPosition > 1)
    {
        prev.disabled = false
    }
    if(currentPosition === 1)
    {
        prev.disabled = true
    }
    
    if(currentPosition > circle_active.length)
    {
        circle[currentPosition-1].classList.add('active')
        progress.style.width = (currentPosition - 1 ) / (circle.length - 1)  * 100 + '%'
    }
    
})

prev.addEventListener('click',() => {
    let circle_active = document.querySelectorAll('.active')
    
    currentPosition--
    if(currentPosition <= 1)
    {
        prev.disabled = true
        currentPosition = 1;
        
    }
    
    if(currentPosition > 1)
    {
        next.disabled = false
    }
    if(currentPosition < circle_active.length)
    {
        circle[currentPosition].classList.remove('active')
        progress.style.width = (currentPosition - 1 ) / (circle.length - 1)  * 100 + '%'
    }
    
})