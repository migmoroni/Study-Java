const fs = require('fs');

function numerarEmOrdemJson(json, valorInicial = 1001, tipo = "") {
    let contador = valorInicial;
    let prefixo = valorInicial;

    function numerarObjeto(objeto, prefixo) {
        for (let chave in objeto) {
            if (chave !== "info-json" && typeof objeto[chave] === "object") {
                numerarObjeto(objeto[chave], prefixo);
            } else if (chave === "info-json" && tipo === "active") {
                prefixo = contador;
            } else if (chave !== "info-json") {
                objeto[chave] = contador++;
            }
        }
    }

    numerarObjeto(json, prefixo);

    return json;
}

function numerarEmPartesJson(json, valorInicial = 1001, tipo = "") {
    let contador = valorInicial;

    function numerarObjeto(objeto, prefixo) {
        let novoPrefixo = prefixo;

        for (let chave in objeto) {
            if (chave !== "info-json" && typeof objeto[chave] === "object") {
                numerarObjeto(objeto[chave], novoPrefixo);
                novoPrefixo = contador++;
            } else if (chave === "info-json" && tipo === "active") {
                novoPrefixo = contador;
            } else if (chave !== "info-json") {
                objeto[chave] = novoPrefixo++;
            }
        }
    }

    numerarObjeto(json, valorInicial);

    return json;
}

// Função para ler um arquivo JSON externo
function lerArquivoJson(nomeArquivo) {
    try {
        const data = fs.readFileSync(nomeArquivo);
        return JSON.parse(data);
    } catch (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
        return null;
    }
}

// Função para escrever em um arquivo JSON externo
function escreverArquivoJson(nomeArquivo, jsonData) {
    try {
        const data = JSON.stringify(jsonData, null, 2);
        fs.writeFileSync(nomeArquivo, data);
        console.log('Arquivo JSON atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao escrever no arquivo JSON:', error);
    }
}



// Exemplo de uso:
/*
const arquivo = 'exemplo.json';
let json = lerArquivoJson(arquivo);
json = numerarJson(json, 1001, 'active');
escreverArquivoJson(arquivo, json);
*/
const exemploJson = {
    "info-json":[
        {
            "type": "1"
        }
    ],
    "a": {
        "adipisci": "111",
        "aliquam": "112",
        "amet": "113",
        "architecto": "114",
        "assumenda": "8015"
    },
    "b": {
        "beatae": "2001",
        "blanditiis": "2002"
    }
};

console.log("Exemplo original:");
console.log(JSON.stringify(exemploJson, null, 2));

console.log("\nOrdem com valor padrão:");
console.log(JSON.stringify(numerarEmOrdemJson(exemploJson), null, 2));

console.log("\nOrdem com valor padrão e reiniciando a contagem:");
console.log(JSON.stringify(numerarEmPartesJson(exemploJson, 1001, "active"), null, 2));


