const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*;/";

function base5040SimplifiedToDecimal(str) {
    return str.split('').reduce((acc, char) => acc * 71 + base71Chars.indexOf(char), 0);
}

function decimalToBase5040Simplified(decimal) {
    let result = '';
    if (decimal === 0) {
        return '0';
    }

    while (decimal > 0) {
        result = base71Chars[decimal % 71] + result;
        decimal = Math.floor(decimal / 71);
    }
    return result || '0';
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
            const value = inputParts.slice(1).join('');
            
            // Adiciona zero à esquerda se houver apenas um caractere
            const paddedValue = value.length === 1 ? `0${value}` : value;
            
            if (isValidChar(paddedValue[0]) && isValidChar(paddedValue[1])) {
                const decimalValue = base5040SimplifiedToDecimal(paddedValue);
                console.log("Base 5040 Simplificada para Decimal:", decimalValue);
            } else {
                console.log("Por favor, insira uma sequência válida na base 5040 Simplificada.");
            }
        }
    }

    return true; // Continuar solicitando novas entradas
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
                    requestInput(); // Solicitar nova entrada
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