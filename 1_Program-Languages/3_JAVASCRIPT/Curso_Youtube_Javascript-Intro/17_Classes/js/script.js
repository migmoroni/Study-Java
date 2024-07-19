/*
CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no Javascript as Classes. As Classes são um conceito
antigo em programação e várias linguagens utilizam elas.
Mas no JavaScript isso é relativamente novo, por isso mesmo programadores experientes
não sabem muito bem utilizar.

Basicamente, as classes são como "fábricas" para criar objetos.
Pode se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os
objetos, as classes no Javascript usam um método chamado constructor() para
fabricar os objetos.

*/

//Classe pode ser vista como uma "fábrica"
//Classe deve sempre ter a primeira letra maiuscula
class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    //Item do carro
    buzina() {
        return this.modelo + " buzinou: Biiiiiiii";
    }
}

/*
//Forma de declaração de objeto sem o uso de Classes
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}
*/

//Em vez da forma acima, agora é possivel construir vários carros diferentes
//É importante sempre declarar após a declaração da classe
const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);

console.log(uno);
console.log(gol.ano);
console.log(gol.buzina());

//É possivel alterar dados assim:
gol.ano = 2014;
console.log(gol.ano);













