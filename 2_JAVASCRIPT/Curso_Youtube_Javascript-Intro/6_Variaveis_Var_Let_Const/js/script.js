/* Vamos entender Variáveis
Variáveis são "recipientes" onde podemos armazenar informações que podem variar,
ou seja, podem ter qualquer tipo de valor.

No Javascript temos 3 palavras chaves para declarar variáveis:
-> var (permite redeclarar, na ordem do código)
-> let (não permite redeclarar, recomenda-se usar let ao inves de var)
-> const (uma vez declarado, não pode mudar)

Variaveis não podem ter o nome:
1data
data nascimento
let
*/

//DECLARAÇÃO DE VARIAVEIS
var a, b, c;

//ATRIBUIÇÃO DE VALORES
a = 2;
b = 3;
c = a + b;

//document.getElementById("texto").innerHTML = c;

//DECLARAÇÃO DE VARIAVEIS
var nome, sobrenome, nomeCompleto;

//ATRIBUIÇÃO DE VALORES
nome = "Dimitri";
sobrenome = "Teixeira";
idade = 30;
nomeCompleto = nome + " " + sobrenome;

pessoa = idade + nome;

//document.getElementById("texto").innerHTML = nomeCompleto;

//document.getElementById("texto").innerHTML = pessoa;

let pessoa2 = "Dimitri"
// let pessoa2 = "Joao" (errado)

//exemplo:
var x = 10; //aqui é 10

{
    var x = 2; //aqui é 2
}

// aqui também vai ser 2

//document.getElementById("texto").innerHTML = x;

let x2 = 10; //aqui é 10

{
    let x2 = 2; //aqui é 2
}

// aqui também vai ser 10

//document.getElementById("texto").innerHTML = x2;

const x3 = 10; //aqui é 10

{
    const x3 = 2; //aqui é 2
}

// const x3 = 5; // ERRO

// aqui também vai ser 10

document.getElementById("texto").innerHTML = x3;