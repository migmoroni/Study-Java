function sha384(input) {
    // Função para calcular a hash SHA-sha384
    const crypto = require('crypto');
    const hash = crypto.createHash('sha384').update(input).digest('hex');
    return Buffer.from(hash, 'hex');
}

function encodeBase85(data) {
    // Dicionário para base85
    const base85Chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~';

    // Função para converter um número para base85
    function numToBase85(num) {
        let result = '';
        for (let i = 0; i < 5; i++) {
            const remainder = num % 85;
            num = Math.floor(num / 85);
            result = base85Chars.charAt(remainder) + result;
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

function encodeBase315(data) {
    // Dicionário para base315
    const base315Chars = Array.from({ length: 315 }, (_, i) => String.fromCodePoint(i));

    // Função para converter um número para base315
    function numToBase315(num) {
        let result = '';
        for (let i = 0; i < 2; i++) {
            const remainder = num % 315;
            num = Math.floor(num / 315);
            result = base315Chars[remainder] + result;
        }
        return result;
    }

    // Converter cada grupo de 4 bytes para base315
    let base315String = '';
    for (let i = 0; i < data.length; i += 4) {
        const chunk = data.readUInt32BE(i);
        base315String += numToBase315(chunk);
    }

    return base315String;
}

// Exemplo de uso
const input = 'Seus dados aqui';
const hash = sha384(input);
const base85Hash = encodeBase85(hash);
const base315Hash = encodeBase315(hash);

console.log('Hash SHA-sha384:', hash.toString('hex'));
console.log('Hash Base85:', base85Hash);
console.log('Hash Base315:', base315Hash);