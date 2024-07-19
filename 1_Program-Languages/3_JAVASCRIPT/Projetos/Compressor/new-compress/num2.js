function findChar(caractere) {
    const intervalos = [
        [0x0000, 0x007E], // ASCII
        [0x0080, 0x00FF]  // Latin-1 Supplement
    ];

    let posicao = 1; // Posição inicial na lista

    for (const intervalo of intervalos) {
        for (let i = intervalo[0]; i <= intervalo[1]; i++) {
            if (String.fromCharCode(i) === caractere) {
                return posicao;
            }
            posicao++;
        }
    }

    return -1; // Caractere não encontrado na lista
}

function caracterePelaPosicao(posicao) {
    const intervalos = [
        [0x0000, 0x007E], // ASCII
        [0x0080, 0x00FF]  // Latin-1 Supplement
    ];

    let contador = 1; // Contador para acompanhar a posição na lista

    for (const intervalo of intervalos) {
        for (let i = intervalo[0]; i <= intervalo[1]; i++) {
            if (contador === posicao) {
                return String.fromCharCode(i);
            }
            contador++;
        }
    }

    return null; // Posição fora da lista
}

// Teste da função
const caractereTeste = '1';
const char = findChar(caractereTeste);
console.log(`O caractere "${caractereTeste}" está na posição ${char} na lista.`);

let posicaoTeste = char;
posicaoTeste = 256;
console.log(`O caractere na posição ${posicaoTeste} é: ${caracterePelaPosicao(posicaoTeste)}`);
