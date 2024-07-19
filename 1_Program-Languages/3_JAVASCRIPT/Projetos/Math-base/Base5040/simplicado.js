function base71ToDecimal(str) {
    const base71Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*?/";
    return str.split('').reduce((acc, char) => acc * 71 + base71Chars.indexOf(char), 0);
}

function decimalToBase5040Simplified(decimal) {
    // Adicionar 44032 para mapear para os primeiros caracteres Hangul Syllables na tabela Unicode
    return String.fromCodePoint((decimal % 5040) + 44032);
}

function base5040SimplifiedToDecimal(str) {
    // Subtrair 44032 para voltar ao intervalo 0-5039
    return str.codePointAt(0) - 44032;
}

function decimalToBase5040(decimal) {
    return (decimal + 1).toString(5040);
}

// Exemplo de uso
const base71Char1 = "0";
const base71Char2 = "1";

const decimalValue = base71ToDecimal(base71Char1 + base71Char2);
const base5040SimplifiedResult = decimalToBase5040Simplified(decimalValue);

console.log("Base 71 para Decimal:", decimalValue);
console.log("Decimal para Base 5040 Simplificada:", base5040SimplifiedResult);

// Exemplo de uso com a Base 5040 Simplificada
const base5040Simplified = "𐐀";  // Substitua pelo caractere correspondente
const decimalResult = base5040SimplifiedToDecimal(base5040Simplified);
const base5040Result = decimalToBase5040(decimalResult);

console.log("Base 5040 Simplificada para Decimal:", decimalResult);
console.log("Decimal para Base 5040:", base5040Result);