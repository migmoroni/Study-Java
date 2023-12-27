function compressLZW(text) {
    let dictionary = new Map();
    let result = [];
    let currentPhrase = '';

    for (let char of text) {
        let currentEntry = currentPhrase + char;

        if (dictionary.has(currentEntry)) {
            currentPhrase = currentEntry;
        } else {
            result.push(dictionary.get(currentPhrase));
            dictionary.set(currentEntry, dictionary.size + 1);
            currentPhrase = char;
        }
    }

    result.push(dictionary.get(currentPhrase));

    return result;
}

function decompressLZW(compressed) {
    let dictionary = new Map();
    let result = [];

    for (let code of compressed) {
        let entry = dictionary.get(code) || '';
        result += entry;

        if (entry !== '') {
            let currentEntry = (dictionary.get(compressed[0]) || '') + entry.charAt(0);
            dictionary.set(dictionary.size + 1, currentEntry);
        }
    }

    return result;
}

// Exemplo de uso
const originalText = 'abracadabra abracadabra';
const compressedText = compressLZW(originalText);
const decompressedText = decompressLZW(compressedText);

console.log('Original: ', originalText);
console.log('Comprimido: ', compressedText);
console.log('Descomprimido: ', decompressedText);