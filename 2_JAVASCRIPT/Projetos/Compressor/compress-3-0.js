const fs = require('fs');
const readline = require('readline');
const path = require('path');

function createDirectories() {
    const directories = ['files', 'files/source', 'files/old', 'files/comprimidos', 'files/dicionarios', 'files/descomprimidos'];

    directories.forEach(directory => {
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }
    });
}

function getUniqueFilename(baseFilename, folder) {
    let sequence = 1;
    let filename = baseFilename;
    const extension = baseFilename.split('.').pop();

    while (fs.existsSync(`files/${folder}/${filename}`)) {
        filename = `${baseFilename.split('.').slice(0, -1).join('.')}_${sequence}.${extension}`;
        sequence++;
    }

    return filename;
}

function compressHTML(content) {
    let dictionary = {};
    let result = [];
    let terms = extractHTMLTerms(content);

    terms.forEach(term => {
        if (!dictionary[term]) {
            dictionary[term] = Object.keys(dictionary).length + 1;
        }
        result.push(dictionary[term]);
    });

    return { dictionary, compressed: result.join(' ') };
}

function extractHTMLTerms(content) {
    let terms = [];
    let term = '';
    let inTag = false;

    for (let char of content) {
        if (char === '<') {
            inTag = true;
            term = '<';
        } else if (char === '>') {
            inTag = false;
            term += '>';
            terms.push(term);
            term = '';
        } else {
            if (inTag) {
                term += char;
            }
        }
    }

    return terms;
}

function decompressHTML(compressed, dictionary) {
    let decompressed = compressed.split(' ').map(code => {
        for (let term in dictionary) {
            if (dictionary[term] == code) {
                return term;
            }
        }
    }).join('');

    return decompressed;
}

function compressFile(filename) {
    const sourceFilePath = `files/source/${filename}`;
    const content = fs.readFileSync(sourceFilePath, 'utf-8');

    if (path.extname(filename) === '.html') {
        const compressedResult = compressHTML(content);
        const compressedFilename = getUniqueFilename(filename, 'comprimidos');
        const dicionarioFilename = getUniqueFilename(`${filename.split('.')[0]}-dicionario.json`, 'dicionarios');

        fs.writeFileSync(`files/comprimidos/${compressedFilename}`, compressedResult.compressed);
        fs.writeFileSync(`files/dicionarios/${dicionarioFilename}`, JSON.stringify(compressedResult.dictionary, null, 2));

        console.log(`Arquivo comprimido: ${compressedFilename}`);
    } else {
        console.log(`O arquivo ${filename} não é um arquivo HTML e não será comprimido.`);
    }
}

function decompressFile(filename) {
    const compressedFilePath = `files/comprimidos/${filename}`;
    const compressedContent = fs.readFileSync(compressedFilePath, 'utf-8');
    const dictionaryPath = `files/dicionarios/${filename.split('.')[0]}-dicionario.json`;

    try {
        const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, 'utf-8'));

        if (path.extname(filename) === '.html') {
            const descomprimidosFilename = getUniqueFilename(filename, 'descomprimidos');
            const decompressedText = decompressHTML(compressedContent, dictionary);

            fs.writeFileSync(`files/descomprimidos/${descomprimidosFilename}`, decompressedText);
            console.log(`Arquivo descomprimido: ${descomprimidosFilename}`);
        } else {
            console.log(`O arquivo ${filename} não é um arquivo HTML e não será descomprimido.`);
        }
    } catch (error) {
        console.error(`Erro ao descomprimir ${filename}:`, error.message);
    }
}

function clearFiles(folderPath) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        
        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            fs.unlink(filePath, err => {
                if (err) {
                    console.error('Error deleting file:', err);
                    return;
                }
                console.log(`File ${filePath} deleted successfully`);
            });
        });
    });
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    createDirectories();

    console.log('Opções:');
    console.log('1 - Comprimir arquivos');
    console.log('2 - Descomprimir arquivos');
    console.log('3 - Limpar pastas');

    rl.question('Escolha uma opção: ', (subOption) => {
        if (subOption === '1') {
            const files = fs.readdirSync('files/source');
            files.forEach(file => compressFile(file));
        } else if (subOption === '2') {
            const files = fs.readdirSync('files/comprimidos');
            files.forEach(file => decompressFile(file));
        } else if (subOption === '3') {
            const files = ['files/comprimidos', 'files/dicionarios', 'files/descomprimidos'];
            files.forEach(file => clearFiles(file));
        } else { 
            console.log('Opção inválida.');
        }

        rl.close();
    });
}

// Execute a função principal
main();
