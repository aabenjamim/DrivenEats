
let comida;
let bebida;
let sobremesa;
let valor1;
let valor2;
let valor3;


function selecionarItem1(itemClicado){

   const item = document.querySelector('.comidas .selecionada')

   if (item !== null){
    item.classList.toggle('selecionada')
   }

   itemClicado.classList.toggle('selecionada')

   const prato = document.querySelector('.comidas .selecionada>h1')
   
   comida = prato.innerHTML

   const preco = document.querySelector('.comidas .selecionada .preco-item')

   valor1 = (Number(preco.innerHTML.replace(',', '.')))

   console.log(valor1)

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

    const preco = document.querySelector('.bebidas .selecionada .preco-item')

    valor2 = (Number(preco.innerHTML.replace(',', '.')))

    console.log(valor2)

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

    const preco = document.querySelector('.sobremesas .selecionada .preco-item')

    valor3 = (Number(preco.innerHTML.replace(',', '.')))

    console.log(valor3)

    liberarBotao()
 }

 function liberarBotao(){

    const botaoPedido = document.querySelector('.botao-pedido')

    if ( comida !== undefined && bebida!== undefined && sobremesa !== undefined){
        botaoPedido.classList.remove('escondido')
    }
 }

 function fazerPedido(){
    
    const total = valor1 + valor2 + valor3 

    const totalformatado = (total.toFixed(2).replace('.', ','))

    const mensagem = 'Olá, gostaria de fazer o pedido:\n- Prato: ' 
    + comida + '\n- Bebida: ' + bebida + '\n- Sobremesa: ' + sobremesa + 
    '\nTotal: R$ '+ totalformatado

    const mensagemzap = encodeURIComponent(mensagem)

    window.open('https://wa.me/5588900000000?text=' + mensagemzap)

 }