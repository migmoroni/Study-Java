/*
IF e ELSE

*/

/*
var interruptor = "on";

if (interruptor == "on") {
    console.log('A lampada está ligada');
} else {
    console.log('A lampada está desligada');
}

*/

/*
var hora = new Date().getHours(); //metodo que retorna a hora do presente momento

console.log(hora);

if (hora < 12) {
    console.log('Bom dia');
} else if (hora < 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}

*/

function verificar() {
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "Parabens ! Tudo certinho.";
        p.style.color = "green";
    }
}