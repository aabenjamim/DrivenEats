
function selecionarItem1(itemClicado){

   const item = document.querySelector('.comidas .selecionada')

   if (item !== null){
    item.classList.toggle('selecionada')
   }

   itemClicado.classList.toggle('selecionada')
}
 

function selecionarItem2(itemClicado){

    const item = document.querySelector('.bebidas .selecionada')
 
    if (item !== null){
     item.classList.toggle('selecionada')
    }
 
    itemClicado.classList.toggle('selecionada')
 }

 function selecionarItem3(itemClicado){

    const item = document.querySelector('.sobremesas .selecionada')
 
    if (item !== null){
     item.classList.toggle('selecionada')
    }
 
    itemClicado.classList.toggle('selecionada')
 }