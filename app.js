// ¡Buena suerte!
let btn = document.querySelector('.card__dice');
let ids = document.querySelector('#advice-id');
let texto = document.querySelector('.card__quote');
btn.addEventListener('click',async function(){
    let response = await fetch('https://api.adviceslip.com/advice');
    let data = await response.json();
    ids.textContent=data.slip.id;
    texto.textContent=data.slip.advice;

});