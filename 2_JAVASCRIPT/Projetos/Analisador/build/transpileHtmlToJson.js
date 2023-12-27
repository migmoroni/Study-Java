const fs = require('fs');
const cheerio = require('cheerio');

// Diretórios de entrada e saída
const inputFolderPath = 'files/code/html';
const outputFolderPath = 'files/transpilados';

// Verifica se a pasta de entrada existe
if (!fs.existsSync(inputFolderPath)) {
  console.error('Pasta de entrada não encontrada.');
  process.exit(1);
}

// Cria a pasta de saída, se necessário
if (!fs.existsSync(outputFolderPath)) {
  fs.mkdirSync(outputFolderPath, { recursive: true });
}

// Função para transpilar HTML/CSS para JSON usando Cheerio
function transpileToJSON($) {
  function traverse(element) {
    const result = {
      tag: element.prop('tagName').toLowerCase(),
      attributes: {},
      children: [],
    };

    // Processa os atributos
    $(element).each((key, value) => {
      Object.assign(result.attributes, $(value).attr());
    });

    // Processa os filhos recursivamente
    $(element).children().each((_, child) => {
      result.children.push(traverse($(child)));
    });

    return result;
  }

  // Inicia a transpilação a partir da raiz (html)
  return traverse($('html'));
}

// Lista os arquivos na pasta de entrada
const files = fs.readdirSync(inputFolderPath);

// Itera sobre cada arquivo HTML na pasta de entrada
files.forEach((file) => {
  if (file.endsWith('.html')) {
    const inputFilePath = `${inputFolderPath}/${file}`;
    const $ = cheerio.load(fs.readFileSync(inputFilePath, 'utf-8'));

    // Transpila para JSON
    const jsonResult = transpileToJSON($);

    // Cria o caminho para o arquivo de saída transpilado
    const outputFilePath = `${outputFolderPath}/${file.replace('.html', '.json')}`;

    // Salva o JSON transpilado no arquivo de saída
    fs.writeFileSync(outputFilePath, JSON.stringify(jsonResult, null, 2));

    console.log(`Arquivo transpilado e salvo em: ${outputFilePath}`);
  }
});

console.log('Processo de transpilação concluído.');