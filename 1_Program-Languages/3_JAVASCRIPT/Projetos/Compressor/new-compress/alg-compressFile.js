//Copyright Miguel Eduardo Senna Moroni - MIT License

const fs = require('fs');
const path = require('path');

function compressFile(fileName) {
    const fileContent = fs.readFileSync(`source/${fileName}`, 'utf-8');
    const dictionaryHTML = encodeBase65536()

    let compressedContent = replace(fileContent);

    fs.writeFileSync(`files/com/${fileName}`, compressedContent, 'utf-8');
    console.log(`Arquivo ${fileName} comprimido com sucesso.`);
}

function replace(content, base) {
    let compressedContent = content;

    Object.entries(dictionary).forEach(([tag, code]) => {
        const openingTag = `<${tag}`;
        const closingTag = `<${tag}`;
        const openingTagRegex = new RegExp(`${openingTag}\\b([^>]*)>`, 'gi');
        const closingTagRegex = new RegExp(`${closingTag}\\b>`, 'gi');

        compressedContent = compressedContent.replace(openingTagRegex, `<${code}$1>`);
        compressedContent = compressedContent.replace(closingTagRegex, `<${code}>`);
    });

    return compressedContent;
}

function encodeBase65536(data) {
    const base105Chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZaáàãâbcdeéèẽêfghiíìĩîjklmnoóòõôpqrstuúùũûvwxyz!@#$%&*()-_+§[{]},.;:/?\\|';

    // Função para converter uma palavra da base 105 para base 65536
    function palavraBase105ToBase65536(palavra) {
        if (/[<>=""]/.test(palavra)) {
            return palavra; // Retorna a palavra original se contiver caracteres fora da base 105
        }
        
        if (palavra[0] === '0') return palavra; // Retorna a palavra original se começar com "0"
        
        let resultado = '';
        for (let i = 0; i < palavra.length; i += 2) {
            const par = palavra.slice(i, i + 2);
            const decimal = base105Chars.indexOf(par[0]) * base105Chars.length + base105Chars.indexOf(par[1]) + 7536;
            resultado += String.fromCharCode(decimal);
        }
        return resultado;
    }

    let palavras = data.split(/\s+/);
    let resultado = '';
    for (let i = 0; i < palavras.length; i++) {
        resultado += palavraBase105ToBase65536(palavras[i]) + ' ';
    }
    return resultado.trim(); // Remove o espaço extra no final
}





function getUnicodePrintableChars() {
    // Retorna uma string contendo caracteres Unicode imprimíveis
    let unicodePrintableChars = '';
    for (let i = 0x21; i <= 0x7E; i++) {
        unicodePrintableChars += String.fromCodePoint(i);
    }
    return unicodePrintableChars;
}

function getUnicodePrintableChars() {
    // Retorna uma string contendo caracteres Unicode imprimíveis
    let unicodePrintableChars = '';
    for (let i = 0xBF; i <= 0xFF; i++) {
        unicodePrintableChars += String.fromCodePoint(i);
    }
    return unicodePrintableChars;
}


//const base85Chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZaáàãâbcdeéèẽêfghiíìĩîjklmnoóòõôpqrstuúùũûvwxyz!@#$%&*()-_=+§[{]},<.>;:/?\\|';  

