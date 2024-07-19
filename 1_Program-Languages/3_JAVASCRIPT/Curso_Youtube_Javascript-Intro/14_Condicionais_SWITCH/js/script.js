/*
Switch

É usado para realizar diferentes ações com base em diferentes condições no
mesmo bloco de verificação. Caso a condição não seja compatível, não será
executada e o valor padrão será adicionado.

switch (expressao) {
    case a:
        //o que acontece
        break;
    case b:
        //o que acontece
        break;
    case c:
        //o que acontece
        break;
    default:
    //o que acontece
}

*/

/*
function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

    switch (cor) {
        case "azul":
            //o que acontece
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            //o que acontece
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            //o que acontece
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            //o que acontece
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para " + cor;
    }
}
*/


/*
function verificaCor() {
    let cor = document.getElementById("cor").value;

    let x = "0"; //Cuidado em informar de um tipo diferente

    switch (x) {
        case 0:
            //o que acontece
            document.body.style.backgroundColor = "A variavel é zero";
            break;
        default:
            //o que acontece
            document.getElementById("teste").innerHTML = "Não foi encontrada";
    }
}
*/


function diaDaSemana() {
    var dia = new Date().getDay();

    console.log(dia); //dia da semana, onde domingo é 0, segunda é 1, ...

    switch (dia) {
        case 0:
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Domingo";
            break;
        case 1:
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Segunda";
            break;
        case 2:
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Terça";
            break;
        case 3:
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Quarta";
            break;
        case 4:
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Quinta";
            break;
        case 5:
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Sexta";
            break;
        case 6:
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Sábado";
            break;
        default:
            //o que acontece
            document.getElementById("teste").innerHTML = "Não sei que dia é ... ";
    }
}
