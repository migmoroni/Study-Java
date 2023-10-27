/* Vamos entender Operadores:
-> Os operadores JavaScript são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += -= && || etc ...

São separados em 6 "categorias":

1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição (da valor a uma variavel)
3) Operadores de Sequência (concatenar)
4) Operadores de Comparação (comparar variaveis se é V ou F)
5) Operador Condicional (Ternário) (quando atribui valor a uma variavel)
6) Operadores Lógicos


*/

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = valor1 + valor2;
console.log(total)

total = valor1 - valor2;
console.log(total)

total = valor1 / valor2;
console.log(total)

//Atribuição

total = ++valor1;
console.log(total)
console.log("O valor1 ficou: " + valor1)

total = --valor1;
console.log(total)
console.log("O valor1 ficou: " + valor1)

// valor1 = valor1 + valor2; Pode ser escrito tambem como:
valor1 += valor2;

console.log("O valor1 ficou: " + valor1)

//Concatenação

valor1 = "Miguel ";
valor2 = "Moroni";

total = valor1 + valor2;
console.log(total)

//Comparação

valor1 = 8;
valor2 = 10;

total = (valor1 == valor2) //true (verdadeiro) ou false (falso)
console.log(total)

valor1 = 8;
valor2 = 8;

total = (valor1 == valor2) //true (verdadeiro) ou false (falso)
console.log(total)

valor1 = 8;
valor2 = "8";

total = (valor1 == valor2) //true (verdadeiro) ou false (falso)
console.log(total)

valor1 = 8;
valor2 = "8";

total = (valor1 === valor2) //true (verdadeiro) ou false (falso) e verifica o TIPO
console.log(total)

valor1 = 8;
valor2 = 8;

total = (valor1 === valor2) //true (verdadeiro) ou false (falso) e verifica o TIPO
console.log(total)

valor1 = 8;
valor2 = 8;

total = (valor1 != valor2) //true (verdadeiro) ou false (falso)
console.log(total)

valor1 = 8;
valor2 = 12;

total = (valor1 != valor2) //true (verdadeiro) ou false (falso)
console.log(total)

valor1 = 8;
valor2 = "8";

total = (valor1 != valor2) //true (verdadeiro) ou false (falso)
console.log(total)

valor1 = 8;
valor2 = "8";

total = (valor1 !== valor2) //true (verdadeiro) ou false (falso) e verifica o TIPO
console.log(total)

valor1 = 8;
valor2 = 12;

total = (valor1 < 4) //true (verdadeiro) ou false (falso)
console.log(total)

total = (valor1 > 4) //true (verdadeiro) ou false (falso)
console.log(total)

total = (valor1 >= 8) //true (verdadeiro) ou false (falso)
console.log(total)

total = (valor1 >= 9) //true (verdadeiro) ou false (falso)
console.log(total)


//Ternário

var idade, eleitor;
idade = 16;
eleitor = (idade < 16) ? "Não eleitor" : "Sim, eleitor"

console.log('A resposta é: ' + eleitor + ' a idade dele é de: ' + idade)
idade = 15;
eleitor = (idade < 16) ? "Não eleitor" : "Sim, eleitor"

console.log('A resposta é: ' + eleitor + ' a idade dele é de: ' + idade)

//Ternário + Lógico

var idade, eleitor, resultado;
idade = 25;
eleitor = (idade < 16) ? "Não eleitor" : "Sim, eleitor"

resultado = (idade > 60 && idade < 70) //intervalor entre 60 e 70: true

console.log(resultado)

idade = 65;
resultado = (idade === 65 || idade === 72) // 65 ou 72: true

console.log(resultado)

idade = 72;
resultado = !(idade === 65) // diferente de 65: true

console.log(resultado)