//Copyright Miguel Eduardo Senna Moroni - MIT License

const fs = require('fs');
const readline = require('readline');

const { compressFile } = require('./dic-compressFile');
const { uncompressFile } = require('./dic-uncompressFile');
const { textWindow } = require('./about');
const { clearFiles, clearSelect } = require('./clearFiles');

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("#-#-# Programa de Compressão de Linguagens #-#-#");
    console.log("#-# Opções:");
    console.log("1 - Com/Descom Completa");
    console.log("2 - Com/Descom Particionada");
    console.log("3 - Limpar pasta 'files'");
    console.log("4 - Sobre este programa");

    //createDirectories();

    rl.question('Escolha uma opção: ', (option) => {
        if (option === '1') {
            
            console.log("Opções:");
            console.log("1 - Comprimir arquivos");
            console.log("2 - Descomprimir arquivos");

            rl.question('Escolha uma opção: ', (subOption) => {
                if (subOption === '1') {
                    const files = fs.readdirSync('source');
                    files.forEach(file => compressFile(file));
                } else if (subOption === '2') {
                    const files = fs.readdirSync('files/com');
                    files.forEach(file => uncompressFile(file));
                } else { 
                    console.log('Opção inválida.');
                }
        
                rl.close();
                
            });
            
        } else if (option === '2') {
            console.log("Opções:");
            console.log("1 - Compressão por Dicionário");
            console.log("2 - Compressão por Algoritmo");
            
            rl.question('Escolha uma opção: ', (subOption) => {
                if (subOption === '1') {
                    console.log("Opções:");
                    console.log("1 - Comprimir arquivos");
                    console.log("2 - Descomprimir arquivos");

                    rl.question('Escolha uma opção: ', (subOption) => {
                        if (subOption === '1') {
                            const files = fs.readdirSync('source');
                            files.forEach(file => compressFile(file));
                        } else if (subOption === '2') {
                            const files = fs.readdirSync('files/com');
                            files.forEach(file => uncompressFile(file));
                        } else { 
                            console.log('Opção inválida.');
                        }
                
                        rl.close();
                    });
                } else if (subOption === '2') {
                    console.log("Opções:");
                    console.log("1 - Comprimir arquivos");
                    console.log("2 - Descomprimir arquivos");

                    rl.question('Escolha uma opção: ', (subOption) => {
                        if (subOption === '1') {
                            const files = fs.readdirSync('source');
                            files.forEach(file => compressFile(file));
                        } else if (subOption === '2') {
                            const files = fs.readdirSync('files/com');
                            files.forEach(file => uncompressFile(file));
                        } else { 
                            console.log('Opção inválida.');
                        }
                
                        rl.close();
                    });
                } else { 
                    console.log('Opção inválida.');
                }
        
                //rl.close();
            });
        } else if (option === '3') {
            clearSelect(option).forEach(file => clearFiles(file));
            rl.close();
        } else if (option === '4') {
            textWindow();
            rl.close();
        } else { 
            console.log('Opção inválida.');
            rl.close();
        }
        
        
        
    });

    
}

main();