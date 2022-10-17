
let comida;
let bebida;
let sobremesa;


function selecionarItem1(itemClicado){

   const item = document.querySelector('.comidas .selecionada')

   if (item !== null){
    item.classList.toggle('selecionada')
   }

   itemClicado.classList.toggle('selecionada')

   const prato = document.querySelector('.comidas .selecionada>h1')
   
   comida = prato.innerHTML

   liberarBotao()
}
 

function selecionarItem2(itemClicado){

    const item = document.querySelector('.bebidas .selecionada')
 
    if (item !== null){
     item.classList.toggle('selecionada')
    }
 
    itemClicado.classList.toggle('selecionada')

    const refri = document.querySelector('.bebidas .selecionada>h1')
   
    bebida = refri.innerHTML

    liberarBotao()
 }

 function selecionarItem3(itemClicado){

    const item = document.querySelector('.sobremesas .selecionada')
 
    if (item !== null){
     item.classList.toggle('selecionada')
    }
 
    itemClicado.classList.toggle('selecionada')

    const doce = document.querySelector('.sobremesas .selecionada>h1')
   
    sobremesa = doce.innerHTML

    liberarBotao()
 }

 function liberarBotao(){

    const botaoPedido = document.querySelector('.botao-pedido')

    if ( comida !== undefined && bebida!== undefined && sobremesa !== undefined){
        botaoPedido.classList.remove('escondido')
    }
 }