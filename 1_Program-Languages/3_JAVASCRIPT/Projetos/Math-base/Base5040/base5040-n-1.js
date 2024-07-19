const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*;/";

function base5040SimplifiedToDecimal(str) {
    let soma = 0;
    const bloco = 5040;
    let index = 0;

    while (str.length > 0) {
        const char = str[0];
        const valor = base71Chars.indexOf(char);
        soma = soma * 71 + valor;
        str = str.slice(1);

        if (soma >= bloco) {
            const blocoAtual = Math.floor(soma / bloco);
            array[index] = blocoAtual;
            index++;
            soma = soma % bloco;
        }
    }

    return soma;
}

function decimalToBase5040Simplified(decimal) {
    let resultado = '';
    const bloco = 5040;

    while (decimal > 0) {
        const caractere = base71Chars[decimal % 71];
        resultado = caractere + resultado;
        decimal = Math.floor(decimal / 71);

        if (decimal % bloco === 0) {
            const blocoAtual = Math.floor(decimal / bloco);
            resultado = '1' + resultado.slice(1);
        }
    }

    if (resultado.startsWith('0')) {
        resultado = resultado.slice(1);
    }

    return resultado || '0';
}

function isValidChar(char) {
    return base71Chars.includes(char);
}

function processInput(input) {
    const trimmedInput = input.trim().toLowerCase();

    if (trimmedInput === 'exit' || trimmedInput === 'q=') {
        console.log('Programa encerrado.');
        process.exit();
    }

    const inputParts = input.split(' ');
    const option = inputParts[0];

    if (option === '0' || option === '1') {
        const value = inputParts[1];

        if (option === '0') {
            const decimalValue = parseInt(value, 10);
            const base5040Value = decimalToBase5040Simplified(decimalValue);
            console.log("Base Decimal para Base 5040 Simplificada:", base5040Value);

        } else if (option === '1') {
            if (isValidChar(value[0]) && isValidChar(value[1]) && !value.includes('//')) {
                const decimalValue = base5040SimplifiedToDecimal(value);
                console.log("Base 5040 Simplificada para Decimal:", decimalValue);
            } else {
                console.log("Por favor, insira uma sequência válida na base 5040 Simplificada.");
            }
        }
    }

    return true;
}

console.log('Para encerrar o programa, digite "exit" ou "q=".');

(function requestInput() {
    process.stdout.write('Escolha uma opção (0 para Decimal -> Base 5040s, 1 para Base 5040s -> Decimal): ');

    process.stdin.once('data', (optionChunk) => {
        const option = optionChunk.toString().trim();
        
        if (option === 'exit' || option === 'q=') {
            console.log('Programa encerrado.');
            process.exit();
        }

        if (option === '0' || option === '1') {
            process.stdout.write('Digite o valor: ');

            process.stdin.once('data', (valueChunk) => {
                const value = valueChunk.toString().trim();
                const input = `${option} ${value}`;

                if (processInput(input)) {
                    requestInput();
                } else {
                    console.log('Programa encerrado.');
                }
            });
        } else {
            console.log("Por favor, insira uma opção válida (0 para Decimal -> Base 5040s, 1 para Base 5040s -> Decimal) ou digite 'exit' para encerrar.");
            requestInput();
        }
    });
})();