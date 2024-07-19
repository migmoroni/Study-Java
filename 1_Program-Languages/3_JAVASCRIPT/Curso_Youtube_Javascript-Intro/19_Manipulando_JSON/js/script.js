/*
JSON

JSON significa Javascript Object Notation, que traduzido para o português fica algo como
Notação de Objeto Javascript.

Explicando de um modo simples, JSON é basimente uma forma de converter um objeto em texto e o contrário também,
de um texto para um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples,
já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no JavaScript, usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON

*/

/*
// Objeto Carro
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6", "1.4", "1.0"]
}

//Converte para texto json
let texto = JSON.stringify(carro);

//Printa texto no html
document.getElementById('area').innerHTML = texto;

//Converte texto em objeto
let obj = JSON.parse(texto);

//Pegamos um valor deste objeto
console.log(obj.modelo);
console.log(obj.motor[2]);

*/

/*

const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/85802000/json/');
ajax.send();

ajax.onload = function () {
    document.getElementById('area').innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    document.getElementById('ddd').innerHTML = obj.ddd;
}

*/

function buscarCEP() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json');
    ajax.send();

    ajax.onload = function () {
        document.getElementById('texto').innerHTML = this.responseText;
        let obj = JSON.parse(this.responseText);
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto2').innerHTML = "Logradouro: " + logradouro + "<br>Cidade: " + cidade + "<br>Estado: " + estado;
    }
}


