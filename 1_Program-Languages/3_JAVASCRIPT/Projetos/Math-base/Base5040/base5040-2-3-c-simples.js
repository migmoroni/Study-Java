const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*;/";

const base5040SimplifiedToDecimal = str => [...str].reduce((acc, char) => acc * 71 + base71Chars.indexOf(char), 0);

const decimalToBase5040Simplified = decimal => decimal === 5040 ? '0' : decimal.toString(71);

const isValidChar = char => base71Chars.includes(char);

function processInput(input) {
    const [option, value] = input.trim().toLowerCase().split(' ');

    if (['0', '1'].includes(option)) {
        const decimalValue = option === '0' ? parseInt(value, 10) : base5040SimplifiedToDecimal(value);
        console.log(option === '0' ? `Base Decimal para Base 5040 Simplificada: ${decimalToBase5040Simplified(decimalValue)}` : `Base 5040 Simplificada para Decimal: ${decimalValue}`);
    } else {
        console.log("Por favor, insira uma opção válida (0 para Decimal -> Base 5040s, 1 para Base 5040s -> Decimal) ou digite 'exit' para encerrar.");
    }

    return option !== 'exit'; // Continue requesting new inputs unless 'exit'
}

console.log('Para encerrar o programa, digite "exit" ou "q=".');

(function requestInput() {
    process.stdout.write('Escolha uma opção (0 para Decimal -> Base 5040s, 1 para Base 5040s -> Decimal): ');

    process.stdin.once('data', optionChunk => {
        const option = optionChunk.toString().trim();

        if (['exit', 'q='].includes(option)) {
            console.log('Programa encerrado.');
            process.exit();
        }

        if (['0', '1'].includes(option)) {
            process.stdout.write('Digite o valor: ');

            process.stdin.once('data', valueChunk => {
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