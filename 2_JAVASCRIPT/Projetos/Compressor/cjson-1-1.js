const fs = require('fs');
const readline = require('readline');

function createDirectories() {
    const directories = ['files', 'files/source', 'files/comprimidos', 'files/dicionarios', 'files/descomprimidos'];

    directories.forEach(directory => {
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }
    });
}

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

function compressFile(filename) {
    const filePath = `files/source/${filename}`;
    const content = fs.readFileSync(filePath, 'utf-8');

    const compressedResult = compressWithDictionary(content);

    fs.writeFileSync(`files/comprimidos/${filename}`, compressedResult.compressed);
    fs.writeFileSync(`files/dicionarios/${filename.split('.')[0]}-dicionario.json`, JSON.stringify(compressedResult.dictionary, null, 2));

    console.log(`Arquivo comprimido: ${filename}`);
}

function decompressFile(filename) {
    const filePath = `files/comprimidos/${filename}`;
    const compressedContent = fs.readFileSync(filePath, 'utf-8');
    const dictionaryPath = `files/dicionarios/${filename.split('.')[0]}-dicionario.json`;
    const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, 'utf-8'));

    const decompressedText = decompressWithDictionary(compressedContent, dictionary);

    fs.writeFileSync(`files/descomprimidos/${filename}`, decompressedText);

    console.log(`Arquivo descomprimido: ${filename}`);
}

function compressCommandLine(inputText) {
    const compressedResult = compressWithDictionary(inputText);

    console.log('Dicionário:', compressedResult.dictionary);
    console.log('Resultado da Compressão:', compressedResult.compressed);
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('Opções:');
    console.log('1 - Compressão por arquivo');
    console.log('2 - Compressão por linha de comando');

    rl.question('Escolha uma opção: ', (option) => {
        if (option === '1') {
            createDirectories();

            console.log('Opções:');
            console.log('1 - Comprimir arquivos');
            console.log('2 - Descomprimir arquivos');

            rl.question('Escolha uma opção: ', (subOption) => {
                if (subOption === '1') {
                    const files = fs.readdirSync('files/source');
                    files.forEach(file => compressFile(file));
                } else if (subOption === '2') {
                    const files = fs.readdirSync('files/comprimidos');
                    files.forEach(file => decompressFile(file));
                } else {
                    console.log('Opção inválida.');
                }

                rl.close();
            });
            
        } else if (option === '2') {
            rl.question('Digite o texto a ser comprimido: ', (inputText) => {
                compressCommandLine(inputText);
                rl.close();
            });
        } else {
            console.log('Opção inválida.');
            rl.close();
        }
    });
}

// Execute a função principal
main();
