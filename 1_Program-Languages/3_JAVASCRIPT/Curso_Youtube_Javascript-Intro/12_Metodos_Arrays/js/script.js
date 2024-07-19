/*
ARRAYS

Os arrays JavaScript são usados para armazenar vários valores em uma única variável.
Diferente dos objetos, que funcionam com as propriedades ou "nomes" que você dá para os itens dentro dele,
os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz","feijão","macarrão","leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante...

*/

const pessoa = ["Dimitri", "Teixeira", 30, "Professor"]; //array

/*
pessoa.pop(); //Remove o ultimo item
pessoa.push("Qualquer coisa"); //Adiciona um item ao final
pessoa.shift(); //Remove o primeiro item
pessoa.unshift("Bonitão"); //Adiciona item na parte inicial no array
delete pessoa[0]; //Esvazia o primeiro item, todavia deixa como undefined  --- não se recomenda usar

//pessoa.splice(1, 0, "Item adicionado 1", "Item adicionado 2"); //Em ordem: "1", representa a posição; "0", representa elementos a serem removidos; "item...": são os intens a adicionar

//document.getElementById("teste").innerHTML = pessoa.join(" - ");
*/

/*
const lista1 = ["Arroz", "feijão", "leite", "macarrão"];
const lista2 = ["Suco", "refrigerante", "carne"];
const lista3 = ["salgadinho"];

const superLista = lista1.concat(lista2, lista3) //Junta matrizes, em uma nova

document.getElementById("teste").innerHTML = superLista.join(" - ");
*/

/*
const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Neymar", "Cristiano Ronaldo", "Vampeta", "Dimitri"]; //array

//const craques = jogadores.slice(2, 6); //Corta a casa 2 para trás e a partir da casa 6

//document.getElementById("teste").innerHTML = craques;
jogadores.sort(); //Deixa em ordem alfabetica
jogadores.reverse(); //Inverte a ordem alfabetica

document.getElementById("teste").innerHTML = jogadores;
*/

const numeros = [40, 100, 1, 5, 25, 10];

//numeros.sort(); //Ordena como fossem texto, não serve para números

//numeros.sort(function (a, b) { return a - b }); //Dessa maneira funciona com numeros
//numeros.sort(function (a, b) { return b - a }); //Dessa maneira funciona com numeros, para inverter

/*
//Obtem o maior numero
function MaiorNumero(array) {
    return Math.max.apply(null, array);
}

//Obtem o menor numero
function MenorNumero(array) {
    return Math.min.apply(null, array);
}

document.getElementById("teste").innerHTML = MaiorNumero(numeros) + ' ' + MenorNumero(numeros);
*/

const maior20 = numeros.filter(filtragem); //Mostrará apenas numeros maiores que 20

function filtragem(value, index, array) {
    return value > 20;
}

document.getElementById("teste").innerHTML = maior20;