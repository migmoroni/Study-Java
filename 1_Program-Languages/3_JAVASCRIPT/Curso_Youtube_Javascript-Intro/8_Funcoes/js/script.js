/* FUNÇÕES
Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo o código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a)

*/

//Função de soma
function soma(valor1, valor2) {
    return valor1 + valor2;
}

//Função de cotação do dólar
function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

//Função de alerta
function alertaHello() {
    alert("Olá pessoal!");
}

//Função que calcula a temperatura
function paraCelsius(valorFahrenheit) {
    return (5 / 9) * (valorFahrenheit - 32);
}

//
function minhaFuncao() {
    let x = 2; //variavel local
}



//Invocando a função 1

//document.getElementById("texto").innerHTML = soma(10, 23);

var total = soma(10, 33);

console.log(total);


//Invocando a função 2

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);

console.log("O valor em real é R$: " + valorReal + " o valor em dólar U$ é: " + total);

//Invocando a função 3

//alertaHello();

var x = paraCelsius(77);

console.log("A temperatura é de " + x + " graus celsius");