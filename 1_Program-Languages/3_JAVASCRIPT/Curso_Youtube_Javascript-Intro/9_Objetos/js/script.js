/*

OBJETOS

Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca:"ford", modelo:"ka", ano: 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é um função colocada dentro de uma propriedade.

*/

const carro = {
    marca: "ford", modelo: "ka", ano: 2015, placa: "ABC1234",
    buzina: function () { alert('Biiiiiiiiii') },
    completo: function () { return "A marca é " + this.marca + " e o modelo é: " + this.modelo }
}; //Objeto literal

console.log(carro);
console.log(carro.ano);
console.log(carro["marca"]);

//carro.buzina();

console.log(carro.completo());











