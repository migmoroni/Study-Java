/*
Laço de repetição FOR

Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.

*/

/*
for (let i = 0; i < 10001; i++) {
    document.getElementById("teste").innerHTML += i + ", ";
}

*/

/*


//Crescente
for (let i = 1900; i <= 2023; i++) {
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>";
}
*/
/*
var ano = new Date().getFullYear();
//Decrescente
for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>";
}

*/

const carros = ["Gol", "Fusca", "Brasilia", "Del Rey", "Chevette"];

var tamanho = carros.length;

//document.getElementById('teste').innerHTML = carros;

for (let i = 0; i < tamanho; i++) {
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}