function base5040SimplifiedToDecimal(str) {
    const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*?/";
    return str.split('').reduce((acc, char) => acc * 71 + base71Chars.indexOf(char), 0);
}

process.stdout.write('Digite a sequência na base 5040 Simplificada (use \' como separador): ');

let inputBuffer = '';

process.stdin.on('data', (chunk) => {
    inputBuffer += chunk.toString();

    if (inputBuffer.includes('\n')) {
        const input = inputBuffer.trim();
        const base71Chars = input.split("'").filter(char => char !== ''); // Remover caracteres vazios

        const base71CharsToConsider = base71Chars.join(''); // Considerar toda a sequência como um bloco

        if ((base71CharsToConsider.length >= 2) && !base71Chars.includes('//')) {
            const base71Char1 = base71CharsToConsider[0];
            const base71Char2 = base71CharsToConsider[1];

            const decimalValue = base5040SimplifiedToDecimal(base71Char1 + base71Char2);

            console.log("Base 5040 Simplificada para Decimal:", decimalValue);

            process.exit();
        } else {
            console.log("Por favor, insira uma sequência válida na base 5040 Simplificada.");
            process.exit(1);
        }
    }
});

process.stdin.on('end', () => {
    console.log('Entrada encerrada.');
});