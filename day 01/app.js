const   panels      =       document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click',() => 
        {
            deactivate()
            panel.classList.add('active')
        }
    )
})

const   deactivate = () => {
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}