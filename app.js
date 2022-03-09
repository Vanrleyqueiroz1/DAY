const colors = document.querySelectorAll('.colors span') ;
const image = document.querySelector('.left-column img') ;
const input = document.querySelector('.right-column .colors .quantity input');
const price = document.querySelector('.right-column .price') ;

    input.addEventListener('change',()=> {
        price.textContent = `BRL ${input.value * 50}` ;
    }) ;
    colors[0].addEventListener('click' , ()=> {
        image.src = './imagens/darkblue.png' ;
    }) ;
    colors[1].addEventListener('click' , ()=> {
        image.src = './imagens/green.png' ;
    }) ;
    colors[2].addEventListener('click' , ()=> {
        image.src = './imagens/purple.png' ;
    }) ;
    colors[3].addEventListener('click' , ()=> {
        image.src = './imagens/black.png' ;
    }) ;





