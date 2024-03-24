const fs = require('fs');

// Numera do começo ao fim
function numerarEmOrdemJson(json, valorInicial = 200) {
    let contador = valorInicial;

    function numerarObjeto(objeto) {
        for (let chave in objeto) {
            if (chave !== "info-json" && typeof objeto[chave] === "object") {
                numerarObjeto(objeto[chave]);
            } else if (chave !== "info-json") {
                objeto[chave] = contador++;
            }
        }
    }

    numerarObjeto(json);

    return json;
}

// Numera cada braço separado
function numerarEmPartesJson(json, valorInicial = 200, tipo = "") {
    let contador = valorInicial;

    function numerarObjeto(objeto, prefixo) {
        let novoPrefixo = prefixo;

        for (let chave in objeto) {
            if (chave !== "info-json" && typeof objeto[chave] === "object") {
                numerarObjeto(objeto[chave], novoPrefixo);
                novoPrefixo = contador;
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

//Ordenar por quantidade
function ordenarPorQuantidadeDeCaracteresInternos(json) {
    for (let chave in json) {
        if (chave !== "info-json" && typeof json[chave] === "object") {
            json[chave] = ordenarObjetoInterno(json[chave]);
            ordenarPorQuantidadeDeCaracteresInternos(json[chave]); // Chama a função recursivamente para ordenar os elementos secundários
        }
    }
    return json;
}

function ordenarObjetoInterno(objeto) {
    const keys = Object.keys(objeto);
    keys.sort((a, b) => a.length - b.length);

    const novoObjeto = {};
    keys.forEach(chave => {
        novoObjeto[chave] = objeto[chave];
    });

    return novoObjeto;
}

function atribuirAspasDuplas(json) {
    for (let chave in json) {
        if (typeof json[chave] === "object") {
            atribuirAspasDuplas(json[chave]); // Chama recursivamente a função para processar os elementos internos
        } else if (chave !== "info-json" && typeof json[chave] === "number") {
            json[chave] = json[chave].toString(); // Converter para string antes de adicionar aspas duplas
        }
    }
    return json;
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
        "assumenda": "8015",
        "a": {
            "adipisci": "111",
            "aliquam": "112",
            "amet": "113",
            "architecto": "114",
            "assumenda": "65015",
        },
    },
    "b": {
        "beatae": "2001",
        "blanditiis": "2002"
    },
    "c": {
        "beatae": "2001",
        "blanditiis": "2002"
    }
};

console.log("Exemplo original:");
console.log(JSON.stringify(exemploJson, null, 2));

console.log("\nOrdenar por quantidade de caracteres nos elementos internos:");
console.log(JSON.stringify(ordenarPorQuantidadeDeCaracteresInternos(exemploJson), null, 2));

console.log("\nOrdem com valor padrão:");
console.log(JSON.stringify(numerarEmOrdemJson(exemploJson), null, 2));

console.log("\nOrdem com valor padrão e reiniciando a contagem:");
console.log(JSON.stringify(numerarEmPartesJson(exemploJson, 100, "active"), null, 2));

console.log("\nOrdem com valor padrão e reiniciando a contagem:");
console.log(JSON.stringify(numerarEmPartesJson(exemploJson, 200, "active"), null, 2));

console.log("\nApós atribuir aspas duplas a valores numéricos:");
console.log(JSON.stringify(atribuirAspasDuplas(exemploJson), null, 2));
