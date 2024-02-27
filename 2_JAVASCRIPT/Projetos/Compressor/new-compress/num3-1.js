// Função para criar um número único a partir de quatro valores inteiros (0 a 16)
function criarNumeroUnico(valor1, valor2, valor3, valor4) {
    // Verificar se os valores estão dentro do intervalo permitido
    if (valor1 < 0 || valor1 > 127 || valor2 < 0 || valor2 > 127 || valor3 < 0 || valor3 > 127 || valor4 < 0 || valor4 > 127) {
        console.error("Os valores devem estar no intervalo de 0 a 16.");
        return null;
    }
    
    // Agrupar os valores em intervalos maiores
    let intervalo = 8;
    let novoValor1 = Math.floor(valor1 / intervalo);
    let novoValor2 = Math.floor(valor2 / intervalo);
    let novoValor3 = Math.floor(valor3 / intervalo);
    let novoValor4 = Math.floor(valor4 / intervalo);
    
    // Calcular o número único atribuindo pesos diferentes para cada valor
    let numeroUnico = novoValor1 * (16 / intervalo) * (16 / intervalo) * (16 / intervalo) + novoValor2 * (16 / intervalo) * (16 / intervalo) + novoValor3 * (16 / intervalo) + novoValor4;
    
    return numeroUnico;
}

// Função para reencontrar os quatro valores originais a partir do número único
function reencontrarValores(numeroUnico) {
    // Decodificar o número único para obter os valores originais
    let intervalo = 8;
    let novoValor4 = Math.floor(numeroUnico % (16 / intervalo));
    let novoValor3 = Math.floor((numeroUnico % ((16 / intervalo) * (16 / intervalo))) / (16 / intervalo));
    let novoValor2 = Math.floor((numeroUnico % ((16 / intervalo) * (16 / intervalo) * (16 / intervalo))) / (32 / intervalo));
    let novoValor1 = Math.floor(numeroUnico / ((16 / intervalo) * (16 / intervalo) * (16 / intervalo)));
    
    // Desagrupar os valores
    let valor1 = novoValor1 * intervalo;
    let valor2 = novoValor2 * intervalo;
    let valor3 = novoValor3 * intervalo;
    let valor4 = novoValor4 * intervalo;
    
    return [valor1, valor2, valor3, valor4];
}

function identificarPadroes(valor1, valor2, valor3, valor4) {
    // Criar o número único
    let numeroUnico = criarNumeroUnico(valor1, valor2, valor3, valor4);

    // Reencontrar os valores originais
    let valoresOriginais = reencontrarValores(numeroUnico);

    // Verificar se os valores reencontrados correspondem aos originais
    let correspondencia = true;
    let variaveisVariadas = [];
    for (let i = 0; i < 4; i++) {
        if (valor1 !== valoresOriginais[0] || valor2 !== valoresOriginais[1] || valor3 !== valoresOriginais[2] || valor4 !== valoresOriginais[3]) {
            correspondencia = false;
            variaveisVariadas.push({
                variavel: i + 1,
                valorOriginal: [valor1, valor2, valor3, valor4][i],
                valorReencontrado: valoresOriginais[i],
                variacao: Math.abs([valor1, valor2, valor3, valor4][i] - valoresOriginais[i])
            });
        }
    }

    // Informar quais variáveis variaram e quais não variaram, e quanto variaram
    if (!correspondencia) {
        console.log("Os valores reencontrados não correspondem aos valores originais.");
        variaveisVariadas.forEach(item => {
            console.log(`Valor${item.variavel} : ${item.variacao}`);
        });
        for (let i = 0; i < 4; i++) {
            if (!variaveisVariadas.some(item => item.variavel === i + 1)) {
                console.log(`Valor${i + 1} não variou. Valor original: ${[valor1, valor2, valor3, valor4][i]}`);
            }
        }
    } else {
        console.log("Os valores reencontrados correspondem aos valores originais.");
    }
}

// Exemplo de uso:
let valor1 = 7;
let valor2 = 8;
let valor3 = 8;
let valor4 = 8;

// Identificar padrões e comparar com os valores originais
identificarPadroes(valor1, valor2, valor3, valor4);

// Criar o número único
let numeroUnico = criarNumeroUnico(valor1, valor2, valor3, valor4);

// Reencontrar os valores originais
let valoresOriginais = reencontrarValores(numeroUnico);


console.log("Número único:", numeroUnico);
console.log("Valores originais:", valoresOriginais);