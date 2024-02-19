const fs = require('fs');
const path = require('path');

function uncompressFile(fileName) {
    const extension = getFileExtension(fileName);
    if (extension === 'html') {
        const fileContent = fs.readFileSync(`files/com/${fileName}`, 'utf-8');
        const dictionaryHTML = require('./dic/dic-tec-html.json');
        
        let compressedContent = replaceHTMLTags(fileContent, dictionaryHTML['1']);
        compressedContent = replaceHTMLAttributes(compressedContent, dictionaryHTML['2']);

        fs.writeFileSync(`files/uncom/${fileName}`, compressedContent, 'utf-8');
        console.log(`Arquivo ${fileName} descomprimido com sucesso.`);
    } else {
        console.log(`Tipo de arquivo '${extension}' não suportado para compressão.`);
    }
}

function replaceHTMLTags(content, dictionary) {
    let compressedContent = content;

    Object.entries(dictionary).forEach(([tag, code]) => {
        const openingTag = `<${code}`;
        const closingTag = `<${code}`;
        const openingTagRegex = new RegExp(`${openingTag}\\b([^>]*)>`, 'gi');
        const closingTagRegex = new RegExp(`${closingTag}\\b>`, 'gi');

        compressedContent = compressedContent.replace(openingTagRegex, `<${tag}$1>`);
        compressedContent = compressedContent.replace(closingTagRegex, `<${tag}>`);
    });

    return compressedContent;
}

function replaceHTMLAttributes(content, dictionary) {
    let compressedContent = content;
    Object.entries(dictionary).forEach(([attribute, code]) => {
        const regex = new RegExp(`\\b${code}(?==")\\b`, 'gi');
        compressedContent = compressedContent.replace(regex, attribute);
    });
    return compressedContent;
}

function getFileExtension(filename) {
    return path.extname(filename).slice(1).toLowerCase();
}

module.exports = { uncompressFile };



