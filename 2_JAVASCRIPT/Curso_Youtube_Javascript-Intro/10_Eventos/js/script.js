/*
EVENTOS

Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um click.
ondblclick -> Disparado quando clique duplo.
onmouseover ->  Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido do elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco. Válido para input, 
onchange -> Disparado quando existe uma mudança no conteúdo (Ao mudar).
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando a tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada.
onresize -> Disparado quando há um redirecionamento da janela.

*/

function eventoClick() {
    //alert('Acionou um evento de click');
    document.body.style.backgroundColor = "yellow"; //no click, troca a cor de fundo
}

function eventoDblClick() {
    //alert('Acionou um evento de click duplo');
    document.body.style.backgroundColor = "yellow"; //no click duplo, troca a cor de fundo
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

/*
function adicionaTexto() {
    let p = document.getElementById("texto")
    p.append('O mouse moveu< br >')
}
*/

function limpaTexto() {
    document.getElementById("campoTexto").value = "";
}

function mudou() {
    console.log("mudou");
}

function teclaPressionada() {
    let input = document.getElementById("campoTexto").value;
    console.log(input)
}




