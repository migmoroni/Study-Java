let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `
        <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="bi bi-circle"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="bi bi-trash3"></i></button>
            </div>
        </div>`;

        //ADICIONADO NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        //ZERAR OS CAMPINHOS
        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('bi-circle');
        icone.classList.add('bi-check-circle-fill');

        item.parentNode.appendChild(item); //PERMITE LANÇAR ITENS CLICADOS PARA O FINAL
    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('bi-check-circle-fill');
        icone.classList.add('bi-circle');

    }
}

input.addEventListener("keyup", function (event) {
    //SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault()
        btnAdd.click();
    }
})