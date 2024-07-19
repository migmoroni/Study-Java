const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*;/";

function base5041SimplifiedToDecimal(str) {
    return str.split('').reduce((acc, char) => acc * 71 + base71Chars.indexOf(char), 0);
}

function decimalToBase5041Simplified(decimal) {
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
            const base5041Value = decimalToBase5041Simplified(decimalValue);
            console.log("Base Decimal para Base 5041 Simplificada:", base5041Value);

        } else if (option === '1') {
            const value = inputParts.slice(1).join('');
            
            // Adiciona zero à esquerda se houver apenas um caractere
            const paddedValue = value.length === 1 ? `0${value}` : value;
            
            if (isValidChar(paddedValue[0]) && isValidChar(paddedValue[1])) {
                const decimalValue = base5041SimplifiedToDecimal(paddedValue);
                console.log("Base 5041 Simplificada para Decimal:", decimalValue);
            } else {
                console.log("Por favor, insira uma sequência válida na base 5041 Simplificada.");
            }
        }
    }

    return true; // Continuar solicitando novas entradas
}

console.log('Para encerrar o programa, digite "exit" ou "q=".');

(function requestInput() {
    process.stdout.write('Escolha uma opção (0 para Decimal -> Base 5041s, 1 para Base 5041s -> Decimal): ');

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
            console.log("Por favor, insira uma opção válida (0 para Decimal -> Base 5041s, 1 para Base 5041s -> Decimal) ou digite 'exit' para encerrar.");
            requestInput();
        }
    });
})();