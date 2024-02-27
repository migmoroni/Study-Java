const fs = require('fs');

// Dados binários correspondentes a "10101010"
const dadosBinarios = Buffer.from('10101010', 'binary');

// Escreve os dados binários no arquivo
fs.writeFile('dados.bin', dadosBinarios, 'binary', (err) => {
    if (err) {
        console.error('Erro ao escrever no arquivo:', err);
        return;
    }
    console.log('Arquivo salvo com sucesso!');
});