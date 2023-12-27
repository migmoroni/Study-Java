function sha384(input) {
    // Função para calcular a hash SHA-sha384
    const crypto = require('crypto');
    const hash = crypto.createHash('sha384').update(input).digest('hex');
    return Buffer.from(hash, 'hex');
}

function getUnicodePrintableChars() {
    // Retorna uma string contendo caracteres Unicode imprimíveis
    let unicodePrintableChars = '';
    for (let i = 0x20; i <= 0x7E; i++) {
        unicodePrintableChars += String.fromCodePoint(i);
    }
    return unicodePrintableChars;
}

function encodeCustomBase85(data, chars) {
    // Função para converter um número para base85
    function numToBase85(num) {
        let result = '';
        for (let i = 0; i < 5; i++) {
            const remainder = num % 85;
            num = Math.floor(num / 85);
            result = chars.charAt(remainder) + result;
        }
        return result;
    }

    // Converter cada grupo de 4 bytes para base85
    let base85String = '';
    for (let i = 0; i < data.length; i += 12) {
        const chunk = data.readUInt32BE(i);
        base85String += numToBase85(chunk);
    }

    return base85String;
}

// Exemplo de uso
const input = 'Seus dados aqui';
const hash = sha384(input);
const unicodePrintableChars = getUnicodePrintableChars();
const customBase85Hash = encodeCustomBase85(hash, unicodePrintableChars);

console.log('Hash SHA-384:', hash.toString('hex'));
console.log('Hash Base85 (Personalizado):', customBase85Hash);