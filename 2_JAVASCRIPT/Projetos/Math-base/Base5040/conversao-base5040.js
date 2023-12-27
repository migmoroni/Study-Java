// Função para converter um número da base 71 para a base 10
/*
function base71ToDecimal(str) {
    const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*?/";

    let result = 0;
    const base = 71;

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const charValue = base71Chars.indexOf(char);
        result = result * base + charValue;
    }

    return result;
}
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para converter um número da base 71 para a base 10
function base71ToDecimal(str) {
    const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*?;";
    return str.split('').reduce((acc, char) => acc * 71 + base71Chars.indexOf(char), 0);
}

// Função para converter um número da base 10 para a base 5040
function decimalToBase5040(decimal) {
    return (decimal + 1).toString(5040);
}

// Função para combinar dois caracteres da base 71 (base 5040 simplificada)
function combineBase71Chars(char1, char2) {
    const decimalValue = base71ToDecimal(char1 + char2);
    return decimalToBase5040(decimalValue);
}

function decimalToUnicode(decimal) {
    // Adicionar 44032 para mapear para os primeiros caracteres Hangul Syllables na tabela Unicode
    return String.fromCodePoint(decimal + 44032);
}

function combineBase71Chars(char1, char2) {
    const decimalValue = base71ToDecimal(char1 + char2);
    return decimalToUnicode(decimalValue);
}


// Exemplo de uso
const base71Char1 = "01";
const base71Char2 = ";;";

const resultUnicode = combineBase71Chars(base71Char1, base71Char2);
console.log("Resultado em Unicode:", resultUnicode);

/*
// Exemplo de uso
const base71Char1 = "0";
const base71Char2 = "1";

const resultBase5040 = combineBase71Chars(base71Char1, base71Char2);
console.log("Resultado em base 5040:", resultBase5040);



*/

rl.question('Digite a sequência na base71 simplificada (use \' como separador): ', (answer) => {
    const base71Chars = answer.split("'");

    if (base71Chars.length === 3 && base71Chars[1] === '' && base71Chars[2] === '') {
        const base71Char1 = base71Chars[0];
        const base71Char2 = base71Chars[1] + "'";

        const decimalValue = base71ToDecimal(base71Char1 + base71Char2);
        const base5040SimplifiedResult = decimalToBase5040Simplified(decimalValue);

        console.log("Base 71 para Decimal:", decimalValue);
        console.log("Decimal para Base 5040 Simplificada:", base5040SimplifiedResult);

        // Exemplo de uso com a Base 5040 Simplificada
        const base5040Simplified = base5040SimplifiedResult;  // Substitua pelo caractere correspondente
        const decimalResult = base5040SimplifiedToDecimal(base5040Simplified);
        const base5040Result = decimalToBase5040(decimalResult);

        console.log("Base 5040 Simplificada para Decimal:", decimalResult);
        console.log("Decimal para Base 5040:", base5040Result);
    } else {
        console.log("Por favor, insira uma sequência válida da base5040 simplificada.");
    }

    rl.close();
});