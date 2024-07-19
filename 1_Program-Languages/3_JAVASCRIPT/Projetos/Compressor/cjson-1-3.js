const fs = require('fs');
const readline = require('readline');
const path = require('path');

function createDirectories() {
    const directories = ['source', 'comprimidos', 'dicionarios', 'descomprimidos'];

    directories.forEach(directory => {
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }
    });
}

function getUniqueFilename(baseFilename, folder) {
    let sequence = 1;
    let filename = baseFilename;

    const extension = path.extname(baseFilename);
    const filenameWithoutExtension = path.basename(baseFilename, extension);

    while (fs.existsSync(path.join(folder, filename))) {
        filename = `${filenameWithoutExtension}_${sequence}${extension}`;
        sequence++;
    }

    return filename;
}

function compressWithDictionary(sourceFilename) {
    const sourceFilePath = path.join('source', sourceFilename);
    const content = fs.readFileSync(sourceFilePath, 'utf-8');

    const dictionary = {};
    let result = [];
    let words = content.split(' ');

    for (let word of words) {
        if (!dictionary[word]) {
            dictionary[word] = Object.keys(dictionary).length + 1;
        }
        result.push(dictionary[word]);
    }

    const compressedFilename = getUniqueFilename(`${sourceFilename.split('.')[0]}-config.json`, 'comprimidos');
    const dicionarioFilename = getUniqueFilename(`${sourceFilename.split('.')[0]}-config.json`, 'dicionarios');

    const config = {
        sourceExtension: path.extname(sourceFilename)
    };

    fs.writeFileSync(path.join('comprimidos', compressedFilename), JSON.stringify({ dictionary, compressed: result.join(' '), config }, null, 2));
    fs.writeFileSync(path.join('dicionarios', dicionarioFilename), JSON.stringify({ ...dictionary, config }, null, 2));

    console.log(`Arquivos comprimidos: ${compressedFilename} e ${dicionarioFilename}`);
}

function decompressWithDictionary(dicionarioFilename, compressedFilename) {
    const dicionarioPath = path.join('dicionarios', dicionarioFilename);
    const compressedPath = path.join('comprimidos', compressedFilename);
    const { dictionary, config } = JSON.parse(fs.readFileSync(dicionarioPath, 'utf-8'));

    const targetExtension = config.sourceExtension || 'txt';

    const descomprimidosFilename = getUniqueFilename(`${compressedFilename.split('-')[0]}.${targetExtension}`, 'descomprimidos');
    const compressedContent = fs.readFileSync(compressedPath, 'utf-8');

    let decompressed = compressedContent.split(' ').map(code => {
        for (let word in dictionary) {
            if (dictionary[word] == code) {
                return word;
            }
        }
    }).join(' ');

    fs.writeFileSync(path.join('descomprimidos', descomprimidosFilename), decompressed);
    console.log(`Arquivo descomprimido: ${descomprimidosFilename}`);
}

function compressFiles() {
    const sourceDirectory = 'source';

    try {
        fs.accessSync(sourceDirectory, fs.constants.R_OK);
    } catch (err) {
        console.log(`Não foi possível encontrar ou acessar o diretório "${sourceDirectory}". Certifique-se de que o diretório existe e é acessível.`);
        return;
    }

    const sourceFiles = fs.readdirSync(sourceDirectory);

    if (sourceFiles.length === 0) {
        console.log(`Não há arquivos para comprimir no diretório "${sourceDirectory}".`);
        return;
    }

    createDirectories();

    sourceFiles.forEach(sourceFile => compressWithDictionary(sourceFile));
}

function decompressFiles() {
    const dicionarioFiles = fs.readdirSync('dicionarios');
    const compressedFiles = fs.readdirSync('comprimidos');

    if (dicionarioFiles.length === 0 || compressedFiles.length === 0) {
        console.log('Não há arquivos para descomprimir na pasta "dicionarios" ou "comprimidos".');
        return;
    }

    const dicionarioFile = dicionarioFiles.reduce((latest, file) => (fs.statSync(path.join('dicionarios', file)).mtime > fs.statSync(path.join('dicionarios', latest)).mtime) ? file : latest, dicionarioFiles[0]);
    const compressedFile = compressedFiles.find(file => file.startsWith(dicionarioFile.split('-')[0]));

    decompressWithDictionary(dicionarioFile, compressedFile);
}

function clearFiles() {
    const directories = ['comprimidos', 'dicionarios', 'descomprimidos'];

    directories.forEach(directory => {
        const files = fs.readdirSync(directory);
        if (files.length === 0) {
            console.log(`Não há arquivos em "${directory}" para limpar.`);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directory, file);
            fs.unlinkSync(filePath);
            console.log(`Arquivo removido: ${filePath}`);
        });
    });

    console.log('Limpeza concluída.');
}

function compressCommandLine(inputText) {
    const sourceFilename = 'input.txt'; // Nome fictício para a entrada via linha de comando
    compressWithDictionary(sourceFilename);
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('Opções:');
    console.log('1 - Compressão por arquivo');
    console.log('2 - Descompressão de arquivos');
    console.log('3 - Limpar arquivos');

    rl.question('Escolha uma opção: ', (option) => {
        if (option === '1') {
            compressFiles();
        } else if (option === '2') {
            decompressFiles();
        } else if (option === '3') {
            clearFiles();
        } else {
            console.log('Opção inválida.');
        }

        rl.close();
    });
}

// Execute a função principal
main();