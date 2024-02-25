//Copyright Miguel Eduardo Senna Moroni - MIT License

const fs = require('fs');
const path = require('path');

function compressFile(fileName) {
    const extension = getFileExtension(fileName);
    if (extension === 'html') {
        const fileContent = fs.readFileSync(`source/${fileName}`, 'utf-8');
        const dictionaryHTML = require('./dic/dic-tec-html.json');
        
        //Structure
        let compressedContent = replaceHTMLTags(fileContent, dictionaryHTML['1']);
        compressedContent = replaceHTMLAttributes(compressedContent, dictionaryHTML['2']);
        compressedContent = replaceHTMLValueAttributes(compressedContent, dictionaryHTML['3']);

        //Language

        fs.writeFileSync(`files/com/${fileName}`, compressedContent, 'utf-8');
        console.log(`Arquivo ${fileName} comprimido com sucesso.`);
    } if (extension === 'css') {


    } else {
    
        console.log(`Tipo de arquivo '${extension}' não suportado para compressão.`);
    }
}

function replaceHTMLTags(content, dictionary) {
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

function replaceHTMLAttributes(content, dictionary) {
    let compressedContent = content;
    Object.entries(dictionary).forEach(([attribute, code]) => {
        const regex = new RegExp(`\\b${attribute}(?==")\\b`, 'gi');
        compressedContent = compressedContent.replace(regex, code);
    });
    return compressedContent;
}

function replaceHTMLValueAttributes(content, dictionary) {
    let compressedContent = content;
    Object.entries(dictionary).forEach(([valueAttribute, code]) => {

        const uniqueTag = `"${valueAttribute}`; // "exemple"
        const multipleFirstTag = `"${valueAttribute}`; // "exemple, ..."
        const multipleCenterTag1 = `,${valueAttribute},`; // "... ,exemple, ..."
        const multipleCenterTag2 = `, ${valueAttribute},`; // "... , exemple, ..." --- FALHA
        const multipleLastTag = `,${valueAttribute}`; // "... ,exemple"
        const multipleLastTag2 = ` ${valueAttribute}`; // "... , exemple" --- TERMINAR

        const uniqueTagRegex = new RegExp(`${uniqueTag}\\b(?=")`, 'gi');
        const multipleFirstTagRegex = new RegExp(`${multipleFirstTag}\\b(?=,)`, 'gi');
        const multipleCenterTag1Regex = new RegExp(`${multipleCenterTag1}\\b(?=,)`, 'gi');
        const multipleCenterTag2Regex = new RegExp(`${multipleCenterTag2}\\b(?=,)`, 'gi');
        const multipleLastTagRegex = new RegExp(`${multipleLastTag}\\b(?=")`, 'gi');

        compressedContent = compressedContent.replace(uniqueTagRegex, `"${code}`);
        compressedContent = compressedContent.replace(multipleFirstTagRegex, `"${code}`);
        compressedContent = compressedContent.replace(multipleCenterTag1Regex, `,${code},`);
        compressedContent = compressedContent.replace(multipleCenterTag2Regex, `, ${code},`);
        compressedContent = compressedContent.replace(multipleLastTagRegex, `,${code}`);
    });
    return compressedContent;
}

function replaceLanguage(content, dictionary){

}

function getFileExtension(filename) {
    return path.extname(filename).slice(1).toLowerCase();
}

module.exports = { compressFile };





/*
voltemos a função compressFile, ela aqui para te refrescar a memoria:

function compressFile(fileName) {
    const extension = getFileExtension(fileName);
    if (extension === 'html') {
        const fileContent = fs.readFileSync(`source/${fileName}`, 'utf-8');
        const dictionaryHTML = require('./dic/dic-tec-html.json');

        let compressedContent = replaceHTMLTags(fileContent, dictionaryHTML['1']);
        compressedContent = replaceHTMLAttributes(compressedContent, dictionaryHTML['2']);

        fs.writeFileSync(`files/com/${fileName}`, compressedContent, 'utf-8');
        console.log(`Arquivo ${fileName} comprimido com sucesso.`);
    } else {
        console.log(`Tipo de arquivo '${extension}' não suportado para compressão.`);
    }
}

Vamos a mais uma etapa após ter mexido em aspectos do html.
Esta etapa é igual a outras linguagens.

Irá agora sobrar os textos diversos que existem.
Deverá informar ao usuário os idiomas suportados, sendo estes:
eng - English
ptb - Portugues
lat - Latim

Usuário pode informar os idiomas, ao digitar as siglas separadas por espaço ou apenas digitar enter, se não deseja informar.

Ao usuário digitar as siglas dos idiomas, será verificado apenas 

A função deve ler cada palavra

*/