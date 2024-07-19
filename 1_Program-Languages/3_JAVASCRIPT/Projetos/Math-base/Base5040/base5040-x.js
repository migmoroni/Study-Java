function base71ToDecimal(str) {
    const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*\\/";
    return str.split('').reduce((acc, char) => acc * 71 + base71Chars.indexOf(char), 0);
}

function decimalToBase71(decimal) {
    if (decimal === 0) return '0z'; // Caso especial para zero

    const result = [];

    while (decimal > 0) {
        result.unshift((decimal - 1) % 71);
        decimal = Math.floor((decimal - 1) / 71);
    }

    return result.map(val => String.fromCodePoint(val + 44032)).join('');
}

process.stdout.write('Digite o valor na base71 (use \' como separador): ');

let inputBuffer = '';

process.stdin.on('data', (chunk) => {
    inputBuffer += chunk.toString();

    if (inputBuffer.includes('\n')) {
        const input = inputBuffer.trim();
        const base71Chars = input.split("'").filter(char => char !== ''); // Remover caracteres vazios

        if (base71Chars.length === 2 || base71Chars.length === 3) {
            const base71Char1 = base71Chars[0];
            const base71Char2 = base71Chars[1];
            const base71Char3 = base71Chars[2];

            const decimalValue = base71Char1 === '0' ? base71ToDecimal(base71Char2 + base71Char3) : base71ToDecimal(input);
            const base71Result = decimalToBase71(decimalValue);

            console.log("Valor digitado:", input);
            console.log("Base71 para Decimal:", decimalValue);
            console.log("Decimal para Base71:", base71Result);
        } else {
            console.log("Por favor, insira uma sequência válida na base71.");
        }

        process.exit();
    }
});

process.stdin.on('end', () => {
    console.log('Entrada encerrada.');
});