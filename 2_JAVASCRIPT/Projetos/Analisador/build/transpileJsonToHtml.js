const fs = require('fs');

// Diretórios de entrada e saída
const inputFolderPath = 'files/transpilados';
const outputFolderPath = 'files/retranspilados';

// Verifica se a pasta de entrada dos arquivos transpilados existe
if (!fs.existsSync(inputFolderPath)) {
  console.error('Pasta de arquivos transpilados não encontrada.');
  process.exit(1);
}

// Cria a pasta de saída para os arquivos retranspilados, se necessário
if (!fs.existsSync(outputFolderPath)) {
  fs.mkdirSync(outputFolderPath, { recursive: true });
}

// Função para retranspilar JSON para HTML/CSS
function retranspileToHTML(element) {
  let result = `<${element.tag}`;

  // Adiciona atributos, se houver
  if (element.attributes) {
    Object.keys(element.attributes).forEach((key) => {
      result += ` ${key}="${element.attributes[key]}"`;
    });
  }

  // Verifica se há filhos antes de tentar acessar a propriedade 'children'
  if (element.children && element.children.length > 0) {
    result += '>';

    // Adiciona o conteúdo, se houver
    element.children.forEach((child) => {
      result += retranspileToHTML(child);
    });

    result += `</${element.tag}>`;
  } else {
    result += ' />';
  }

  return result;
}

// Lista os arquivos na pasta de entrada (arquivos transpilados)
const files = fs.readdirSync(inputFolderPath);

// Itera sobre cada arquivo JSON na pasta de entrada
files.forEach((file) => {
  if (file.endsWith('.json')) {
    const inputFilePath = `${inputFolderPath}/${file}`;
    const jsonData = JSON.parse(fs.readFileSync(inputFilePath, 'utf-8'));

    // Cria o caminho para a pasta de saída dos arquivos retranspilados
    const outputFolder = `${outputFolderPath}/${file.replace('.json', '')}`;

    // Cria a pasta de saída para o arquivo retranspilado
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }

    // Retranspila para HTML
    const htmlResult = retranspileToHTML(jsonData);

    // Cria o caminho para o arquivo de saída retranspilado
    const outputFilePath = `${outputFolder}/retranspilado.html`;

    // Salva o HTML retranspilado no arquivo de saída
    fs.writeFileSync(outputFilePath, htmlResult);

    console.log(`Arquivo retranspilado e salvo em: ${outputFilePath}`);
  }
});

console.log('Processo de retranspilação concluído.');