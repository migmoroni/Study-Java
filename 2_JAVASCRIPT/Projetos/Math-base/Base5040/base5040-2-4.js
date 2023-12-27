const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*;/";

function base5040SimplifiedToDecimal(str) {
    let result = 0;
    let currentSupercasa = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === "'") {
            // Ignorar as aspas simples (separador de supercasa)
        } else {
            const value = base71Chars.indexOf(char);
            currentSupercasa = currentSupercasa * 71 + value;
        }
    }

    // Adicionar a última supercasa ao resultado
    result = result * 5040 + currentSupercasa;

    return result;
}

function decimalToBase5040Simplified(decimal) {
    let result = '';
    while (decimal > 0) {
        const remainder = decimal % 71;
        result = base71Chars[remainder] + result;

        decimal = Math.floor(decimal / 71);
    }

    // Ajuste para considerar a regra de não subtrair 1 quando a primeira supercasa é zero
    if (result.startsWith('0')) {
        result = result.slice(1);
    }
    // Adicionar apóstrofo ao início e ao final
    result = "'" + result + "'";
    
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
            const base5040Value = decimalToBase5040Simplified(parseInt(value, 10));
            console.log("Base Decimal para Base 5040 Simplificada:", base5040Value);
        } else if (option === '1') {
            if (isValidChar(value[0]) && isValidChar(value[1]) && !value.includes('//')) {
                const decimalValue = base5040SimplifiedToDecimal(value);
                console.log("Base 5040 Simplificada para Decimal:", decimalValue);
            } else {
                console.log("Por favor, insira uma sequência válida na base 5040 Simplificada.");
            }
        }
    } else {
        console.log("Por favor, insira uma opção válida (0 para Decimal -> Base 5040, 1 para Base 5040 -> Decimal) ou digite 'exit' para encerrar.");
    }

    return true; // Continuar solicitando novas entradas
}

console.log('Para encerrar o programa, digite "exit" ou "q=".');

(function requestInput() {
    process.stdout.write('Escolha uma opção (0 para Decimal -> Base 5040, 1 para Base 5040 -> Decimal): ');

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
            console.log("Por favor, insira uma opção válida (0 para Decimal -> Base 5040, 1 para Base 5040 -> Decimal) ou digite 'exit' para encerrar.");
            requestInput();
        }
    });
})();