const fs = require('fs');

function compressWithDictionary(text) {
    let dictionary = {};
    let result = [];
    let words = text.split(' ');

    for (let word of words) {
        if (!dictionary[word]) {
            dictionary[word] = Object.keys(dictionary).length + 1;
        }
        result.push(dictionary[word]);
    }

    return { dictionary, compressed: result.join(' ') };
}

function decompressWithDictionary(compressed, dictionary) {
    let decompressed = compressed.split(' ').map(code => {
        for (let word in dictionary) {
            if (dictionary[word] == code) {
                return word;
            }
        }
    }).join(' ');

    return decompressed;
}

// Exemplo de uso
const originalText = "A abelha amarela comeu manga amarela";
const compressedResult = compressWithDictionary(originalText);
const decompressedText = decompressWithDictionary(compressedResult.compressed, compressedResult.dictionary);

// Salva o dicionário em dicionario.json
fs.writeFileSync('dicionario.json', JSON.stringify(compressedResult.dictionary, null, 2));

// Salva o resultado da compressão em resultado.json
fs.writeFileSync('resultado.json', JSON.stringify({ compressed: compressedResult.compressed, original: originalText }, null, 2));

console.log('Original: ', originalText);
console.log('Dicionário: ', compressedResult.dictionary);
console.log('Resultado da Compressão: ', compressedResult.compressed);
console.log('Descomprimido: ', decompressedText);