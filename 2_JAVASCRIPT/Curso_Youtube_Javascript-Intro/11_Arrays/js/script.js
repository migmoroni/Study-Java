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

//3 formas de criar um array
const lista = ["arroz", "feijão", "macarrão", "leite"]; //array literal

const lista2 = [];
lista2[0] = "arroz";
lista2[1] = "feijão";
lista2[2] = "macarrão";
lista2[3] = "leite";

const lista3 = new Array("arroz", "feijão", "macarrão", "leite");

//Chamando array
console.log(lista[0]);

let x = lista[3];
console.log(x);

lista[0] = "café";
console.log(lista[0]);

console.log(lista)

//Diferenças
const pessoa = ["Dimitri", "Teixeira", 30]; //array
const pessoa2 = { nome: "Dimitri", sobrenome: "Teixeira", idade: 30 }; //objeto

pessoa[0];
pessoa2.nome;

// pessoa.length; //Retorna quantos itens possui: 3
console.log(pessoa.length);
console.log(pessoa[pessoa.length - 1]);


pessoa.push("Brasileiro"); //Adiciona item ao final
pessoa[pessoa.length] = "Casado"; //Faz o mesmo que push

pessoa[8] = "Gamer"; //Causará 3 itens vazios no array

console.log(pessoa);
console.log(pessoa[6]) // Não retorna item, pois está vazio

console.log(Array.isArray(pessoa)) // É um array ? Sim !