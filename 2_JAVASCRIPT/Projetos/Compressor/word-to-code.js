// Função para comprimir uma string usando substituição de palavras por códigos
function compress(text) {
    // Dicionário de palavras e códigos
    let dictionary = {};
    let code = 0;
    let compressedText = "";

    // Dividir o texto em palavras
    let words = text.split(" ");

    // Iterar sobre cada palavra no texto
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        // Se a palavra já estiver no dicionário, usa o código correspondente
        if (dictionary.hasOwnProperty(word)) {
            compressedText += dictionary[word];
        } else {
            // Se a palavra não estiver no dicionário, adiciona-a com um novo código
            dictionary[word] = String.fromCharCode(65 + code); // Apenas um exemplo simples de código
            compressedText += dictionary[word];
            code++;
        }

        // Adiciona um espaço após cada palavra (exceto a última)
        if (i < words.length - 1) {
            compressedText += " ";
        }
    }

    return compressedText;
}

// Função para descomprimir uma string comprimida
function decompress(compressedText) {
    // Dicionário de códigos e palavras
    let dictionary = {};
    let code = 0;
    let decompressedText = "";

    // Iterar sobre cada caractere na string comprimida
    let currentWord = "";
    for (let i = 0; i < compressedText.length; i++) {
        let char = compressedText.charAt(i);
        
        // Se encontrar um espaço, tenta recuperar a palavra correspondente ao código atual
        if (char === " ") {
            decompressedText += dictionary[currentWord] || currentWord;
            decompressedText += " ";
            currentWord = "";
        } else {
            // Se não for um espaço, acumula o caractere para formar o código
            currentWord += char;
        }
    }

    // Adiciona a última palavra
    decompressedText += dictionary[currentWord] || currentWord;

    return decompressedText;
}

// Exemplo de uso
let originalText = "Esta é uma frase de exemplo para compressão de texto em JavaScript.";
console.log("Texto Original:", originalText);

let compressedText = compress(originalText);
console.log("Texto Comprimido:", compressedText);

let decompressedText = decompress(compressedText);
console.log("Texto Descomprimido:", decompressedText);
