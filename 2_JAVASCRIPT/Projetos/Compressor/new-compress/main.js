const fs = require('fs');
const readline = require('readline');
const { compressFile } = require('./compressFile');
const { uncompressFile } = require('./uncompressFile');

function main() {
    console.log("Bem-vindo ao programa de compressão de texto!");
    console.log("Opções:");
    console.log("1 - Comprimir arquivos");
    console.log("2 - Descomprimir arquivos");
    console.log("3 - Limpar pasta 'files'");
    console.log("4 - Sobre este programa");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Escolha uma opção: ', (subOption) => {
        if (subOption === '1') {
            const files = fs.readdirSync('source');
            files.forEach(file => compressFile(file));
        } else if (subOption === '2') {
            const files = fs.readdirSync('files/com');
            files.forEach(file => uncompressFile(file));
        } else if (subOption === '3') {
            // Implementar a lógica para limpar pasta 'files'
        } else if (subOption === '4') {
            // Implementar a lógica para mostrar informações sobre o programa
        } else { 
            console.log('Opção inválida.');
        }

        rl.close();
    });
}

main();