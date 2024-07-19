function compressRLE(text) {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i + 1]) {
            count++;
        } else {
            compressed += count + text[i];
            count = 1;
        }
    }

    return compressed;
}

function decompressRLE(compressed) {
    let decompressed = '';

    for (let i = 0; i < compressed.length; i += 2) {
        const count = parseInt(compressed[i], 10);
        const char = compressed[i + 1];

        decompressed += char.repeat(count);
    }

    return decompressed;
}

// Exemplo de uso
const originalText = 'aaabbbbcc';
const compressedText = compressRLE(originalText);
const decompressedText = decompressRLE(compressedText);

console.log('Original: ', originalText);
console.log('Comprimido: ', compressedText);
console.log('Descomprimido: ', decompressedText);