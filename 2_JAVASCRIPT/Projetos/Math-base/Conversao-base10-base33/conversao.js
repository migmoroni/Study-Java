function base33ToBase10(base33String) {
    const base33Chars = '0123456789ABCDEFGHJKLMNPQRSTUVWXY';
    const base33Array = base33String.split('').reverse();

    return base33Array.reduce((acc, char, index) => {
        const charValue = base33Chars.indexOf(char);
        return acc + charValue * Math.pow(33, index);
    }, 0);
}

function base10ToBase33(base10Number) {
    const base33Chars = '0123456789ABCDEFGHJKLMNPQRSTUVWXY';
    let result = '';

    while (base10Number > 0) {
        const remainder = base10Number % 33;
        result = base33Chars[remainder] + result;
        base10Number = Math.floor(base10Number / 33);
    }

    return result || '0';
}

// Exemplo de uso:
const base10Number = 32; // Substitua isso pelo seu número em base 10
const base33Result = base10ToBase33(base10Number);
console.log(base33Result); // Resultado em base 33


const base33Number = 'Y'; // Substitua isso pelo seu número em base 33
const base10Result = base33ToBase10(base33Number);
console.log(base10Result); // Resultado em base 10
