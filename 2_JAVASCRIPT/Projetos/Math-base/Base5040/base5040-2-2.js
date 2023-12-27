const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*;/";

function base5040SimplifiedToDecimal(str) {
    return str.split('').reduce((acc, char) => acc * 71 + base71Chars.indexOf(char), 0);
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

    const base71Chars = input.split("'").join(''); // Remover apóstrofos

    if (base71Chars.length === 2 && isValidChar(base71Chars[0]) && isValidChar(base71Chars[1]) && !base71Chars.includes('//')) {
        const decimalValue = base5040SimplifiedToDecimal(base71Chars);

        console.log("Base 5040 Simplificada para Decimal:", decimalValue);

        return true; // Continuar solicitando novas entradas
    } else {
        console.log("Por favor, insira uma sequência válida na base 5040 Simplificada ou digite 'exit' para encerrar.");
        return true; // Continuar solicitando novas entradas
    }
}

console.log('Para encerrar o programa, digite "exit" ou "q=".');

(function requestInput() {
    process.stdout.write('Digite a sequência na base 5040 Simplificada (use \' como separador): ');

    process.stdin.once('data', (chunk) => {
        const input = chunk.toString().trim();

        if (processInput(input)) {
            requestInput(); // Solicitar nova entrada
        } else {
            console.log('Programa encerrado.');
        }
    });
})();