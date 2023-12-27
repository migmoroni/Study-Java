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

function decimalToBase5040Simplified(decimal) {
    // Adicionar 1 para evitar caracteres nulos
    return String.fromCodePoint((decimal + 1) % 5040);
}

function base5040SimplifiedToDecimal(str) {
    const codePoints = Array.from(str).map(char => char.codePointAt(0));
    return codePoints.reduce((acc, val) => acc * 5040 + val, 0) - 1;
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