/*
MANIPULAR DATAS EM JAVASCRIPT

*/

//Comando base para pegar a data
let data = new Date();
//console.log(data);

//Pegar o ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano);

//Pegar o mês atual - de 0 a 11, sendo janeiro 0 e dezembro 11
let mes = data.getMonth();
console.log(mes);

//Mes no formato escrito
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//Pegar o dia do mes - 1 a 31
let diaMes = data.getDate();
console.log(diaMes);

//Pegar o dia da semana - 0 a 6
let diaSemana = data.getDay();
console.log(diaSemana);

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito);

//Pegar a hora - de 0 a 23
let hora = data.getHours();
console.log(hora);

//Pegar os minutos - de 0 a 59
let minutos = data.getMinutes();
console.log(minutos);

//Pegar segundos - de 0 a 59
let segundos = data.getSeconds();
console.log(segundos);

//Pegar milissegundos - de 0 a 999
let milissegundos = data.getMilliseconds();
console.log(milissegundos);

//Pegar a data no padrao brasileiro - dia/mes/ano
let dataBR = data.toLocaleString('pt-BR', { dateStyle: 'short' });
console.log(dataBR);

let dataBR2 = data.toLocaleString('pt-BR', { timeStyle: 'short' });
console.log(dataBR2);

//Pegar os valores separados
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) { return x < 10 ? '0' + x : '' + x; } //retorna se x menor que 10, entao recebe 0 + x, se não, retorna vazio + x

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

//Comparar datas - maior ou menor. EX: Vencimentos
var hoje = new Date();
var vencimento = new Date(2022, 0, 15); //Colocar no formato que o JS trabalha

if (hoje > vencimento) {
    console.log("Sua conta está vencida!");
} else {
    console.log("Ainda não venceu, tudo certo !");
}

//Diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2023, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias + " dias");