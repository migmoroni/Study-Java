function base71ToDecimal(str) {
    const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*?/";
    return str.split('').reduce((acc, char) => acc * 71 + base71Chars.indexOf(char), 0);
}

function decimalToBase5040(decimal) {
    // Adicionar 44032 para mapear para os primeiros caracteres Hangul Syllables na tabela Unicode
    return String.fromCodePoint((decimal % 5040) + 44032);
}

function base5040ToDecimal(str) {
    // Subtrair 44032 para voltar ao intervalo 0-5039
    return str.codePointAt(0) - 44032;
}

function decimalToBase5040(decimal) {
    const result = [];

    while (decimal >= 0) {
        result.unshift(decimal % 5040);
        decimal = Math.floor(decimal / 5040) - 1;
    }

    return result.map(val => String.fromCodePoint(val + 44032)).join('');
}

process.stdout.write('Digite a sequência na base71 simplificada (use \' como separador): ');

let inputBuffer = '';

process.stdin.on('data', (chunk) => {
    inputBuffer += chunk.toString();

    if (inputBuffer.includes('\n')) {
        const input = inputBuffer.trim();
        const base71Chars = input.split("'").filter(char => char !== ''); // Remover caracteres vazios

        if (base71Chars.length === 2) {
            const base71Char1 = base71Chars[0];
            const base71Char2 = base71Chars[1];

            const decimalValue = base71ToDecimal(base71Char1 + base71Char2);
            const base5040SimplifiedResult = decimalToBase5040(decimalValue);

            console.log("Base 71 para Decimal:", decimalValue);
            console.log("Decimal para Base 5040 Simplificada:", base5040SimplifiedResult);

            // Exemplo de uso com a Base 5040 Simplificada
            const base5040Simplified = base5040SimplifiedResult;  // Substitua pelo caractere correspondente
            const decimalResult = base5040ToDecimal(base5040Simplified);
            const base5040Result = decimalToBase5040(decimalResult);

            console.log("Base 5040 Simplificada para Decimal:", decimalResult);
            console.log("Decimal para Base 5040:", base5040Result);

            process.exit();
        } else {
            console.log("Por favor, insira uma sequência válida na base71 simplificada.");
            process.exit(1);
        }
    }
});

process.stdin.on('end', () => {
    console.log('Entrada encerrada.');
});
