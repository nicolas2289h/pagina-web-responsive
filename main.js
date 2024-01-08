let listado = document.querySelector('.nav__listado')
let menu = document.querySelector('#menu')

listado.addEventListener('click',(e)=>{
    e.preventDefault()
    listado.classList.toggle('expandir')
    
    if(listado.classList.contains('expandir')){
        menu.textContent = 'Ocultar'
    }else{
        menu.textContent = 'Menu'
    }
})