const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*;/";

function base5041SimplifiedToDecimal(str) {
    return str.split('').reduce((acc, char) => acc * 71 + base71Chars.indexOf(char), 0);
}

function decimalToBase5041Simplified(decimal) {
    let result = '';
    if (decimal === 0) {
        return base71Chars[0]; // Se o decimal for 0, retorna o primeiro caractere em base71Chars
    }

    while (decimal > 0) {
        result = base71Chars[decimal % 71] + result;
        decimal = Math.floor(decimal / 71);
    }
    return result;
}

function base5040ToDecimal(str) {
    // Subtrair 44032 para voltar ao intervalo 0-5039
    return str.split('').reduce((acc, char) => acc * 5040 + char.codePointAt(0) - 44032, 0);
}

function decimalToBase5040(decimal) {
    let result = '';
    if (decimal === 0) {
        return String.fromCodePoint(44032); // Caractere inicial da base5040
    }

    while (decimal > 0) {
        const remainder = decimal % 5040;
        result = String.fromCodePoint(remainder + 44032) + result;
        decimal = Math.floor(decimal / 5040);
    }
    return result;
}

function isValidChar(char, option) {
    const isHangul = (option === '5' || option === '6');

    if (!char) {
        return false; // Retorna falso se char for undefined ou nulo
    }

    if (isHangul) {
        // Verifica se o caractere é um Hangul Syllable
        const codePoint = char.codePointAt(0);
        return (codePoint >= 44032 && codePoint <= 55203);
    } else {
        // Para as outras bases, use a lógica anterior
        return (base71Chars.includes(char) || (option === '5' || option === '6'));
    }

}

function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function base5041SimplifiedToBase5040(str) {
    const decimalValue = base5041SimplifiedToDecimal(str);
    return decimalToBase5040(decimalValue);
}

function printOptionDescriptions() {
    console.log(`
    Opções disponíveis:
    1. Base Decimal para Base 5041 Simplificada
    2. Base Decimal para Base 5040
    3. Base 5041 Simplificada para Base Decimal
    4. Base 5041 Simplificada para Base 5040
    5. Base 5040 para Base Decimal
    6. Base 5040 para Base 5041 Simplificada
    `);
}

function processInput(input) {
    const trimmedInput = input.trim().toLowerCase();

    if (trimmedInput === 'exit' || trimmedInput === 'q=') {
        console.log('Programa encerrado.');
        process.exit();
    } else if (trimmedInput === 'info') {
        printOptionDescriptions();
        return true;
    }

    const inputParts = input.split(' ');
    const option = inputParts[0];

    if (option >= '1' && option <= '6') {
        let value;
        
        // Se a opção for 1, 4, U, ou outros, o próximo caractere deve ser 0
        if (option >= '1' && option <= '4') {
            value = '0' + inputParts[1];
        } else {
            value = inputParts.slice(1).join('');
        }

        if (isValidChar(value[0], option) || isValidChar(value[1], option)) {
            let decimalValue;

            if (option === '1') {
                decimalValue = parseInt(value, 10);
                const base5041Value = decimalToBase5041Simplified(decimalValue);
                console.log("Base Decimal para Base 5041 Simplificada:", base5041Value);

            } else if (option === '2') {
                decimalValue = parseInt(value, 10);
                const base5040Value = decimalToBase5040(decimalValue);
                console.log("Base Decimal para Base 5040:", base5040Value);

            } else if (option === '3') {
                decimalValue = base5041SimplifiedToDecimal(value);
                console.log("Base 5041 Simplificada para Decimal:", decimalValue);

            } else if (option === '4') {
                const base5040Value = base5041SimplifiedToBase5040(value);
                console.log("Base 5041 Simplificada para Base 5040:", base5040Value);

            } else if (option === '5') {
                decimalValue = base5040ToDecimal(value);
                console.log("Base 5040 para Decimal:", decimalValue);

            } else if (option === '6') {
                decimalValue = base5040ToDecimal(value);
                const base5041Value = decimalToBase5041Simplified(decimalValue);
                console.log("Base 5040 para Base 5041 Simplificada:", base5041Value);
            }
        } else {
            console.log(`Por favor, insira uma sequência válida para a opção ${option}.`);
        }
    }

    return true; // Continuar solicitando novas entradas
}

console.log('Para encerrar o programa, digite "exit" ou "q=". Para obter informações, digite "info".');
printOptionDescriptions();

(function requestInput() {
    process.stdout.write('Escolha uma opção (1 a 6 para conversões): ');

    process.stdin.once('data', (optionChunk) => {
        const option = optionChunk.toString().trim();

        if (option < '1' || option > '6'){
            if (option === !'exit' || option === !'q=' || option === !'info'){
                console.log("Por favor, insira uma opção válida (1 a 6 para conversões, 'info' para informações) ou digite 'exit' para encerrar.");
                requestInput();
            }
        }

        if (option === 'exit' || option === 'q=') {
            console.log('Programa encerrado.');
            process.exit();
        }

        if (option === 'info') {
            printOptionDescriptions();
            requestInput();
        } else if (option >= '1' && option <= '6') {
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
            console.log("Por favor, insira uma opção válida (1 a 6 para conversões, 'info' para informações) ou digite 'exit' para encerrar.");
            requestInput();
        }
    });
})();