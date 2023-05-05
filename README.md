# DrivenEats - Site Mobile

Este é o meu primeiro projeto em JavaScript, em que implemento o site mobile do DrivenEats, um restaurante especializado em entregas rápidas de combos compostos por Prato, Bebida e Sobremesa. O objetivo do projeto foi permitir que os clientes selecionem facilmente seu combo e enviem o pedido diretamente para o restaurante via WhatsApp.

## Funcionalidades Implementadas

- Versionamento:
    - Utilizei o Git para versionamento do projeto. O repositório público foi criado no GitHub, permitindo o controle de versões e acompanhamento das alterações realizadas.
    - O deploy do projeto foi feito pelo vercel.
  
- Layout:
    - O layout foi desenvolvido para dispositivos móveis. O topo e o botão de fechar pedido possuem posicionamento fixo e não rolam com a barra de rolagem. As fontes utilizadas foram a Righteous (para o nome do restaurante e títulos das categorias) e Roboto (para os demais textos). Foram aplicadas sombras em alguns elementos para se aproximar do layout proposto. Utilizei a propriedade `overflow-x: scroll` para permitir a rolagem horizontal dos produtos, sendo que no modo celular o scroll não é exibido.

- Seleção de itens:
    - Implementei a funcionalidade de marcação de itens ao serem clicados. Ao clicar em um item, ele é marcado como selecionado. Caso já exista um item selecionado na mesma categoria, ao clicar em um novo item, o item anterior é desmarcado e o novo item se torna o selecionado. Também foi considerado o caso em que um item já marcado é clicado novamente, permanecendo selecionado.

- Botão de finalizar pedido:
    - Inicialmente, o botão está desabilitado. Quando o usuário seleciona os itens de todas as três categorias, o botão se torna habilitado.

- Envio do pedido:
    - Ao finalizar o pedido, o usuário é direcionado para o WhatsApp Web, em uma conversa com o contato do restaurante. A mensagem padrão está preenchida com o formato esperado pelo restaurante. Utilizei a função `encodeURIComponent` para preparar a mensagem antes de enviar via WhatsApp.

## Como Executar o Projeto

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` no seu navegador para visualizar o site.

