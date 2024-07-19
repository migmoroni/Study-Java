// Definindo a classe para um nó da árvore TreeOrder60
class Node {
    constructor(valor, frequencia) {
        this.valor = valor;
        this.frequencia = frequencia;
        this.filhos = {};
    }
}

// Função para construir a árvore TreeOrder60 a partir de um array de palavras
function construirArvoreTreeOrder60(palavras) {
    // Contagem da frequência de cada palavra no array
    const frequencias = {};
    for (let palavra of palavras) {
        frequencias[palavra] = (frequencias[palavra] || 0);
    }

    // Criar uma lista de nós para cada palavra e sua frequência
    const listaNos = Object.entries(frequencias).map(([palavra, frequencia]) => new Node(palavra, frequencia));

    // Construir a árvore TreeOrder60
    while (listaNos.length > 1) {
        // Ordenar os nós pela frequência
        listaNos.sort((a, b) => a.frequencia - b.frequencia);

        // Extrair os nós com menor frequência
        const filhos = listaNos.splice(0, 60);

        // Criar um novo nó pai com a soma das frequências e re-adicionar à lista
        const pai = new Node(null, filhos.reduce((acc, curr) => acc + curr.frequencia, 0));
        filhos.forEach((filho, index) => pai.filhos[index < 9 ? index : String.fromCharCode(60 + (index))] = filho);
        listaNos.push(pai);
    }

    // Retornar o nó raiz da árvore TreeOrder60
    return listaNos[0];
}

// Função para gerar códigos TreeOrder60 recursivamente
function gerarCodigosTreeOrder60(no, codigoAtual, codigos) {
    // Se o nó é uma folha, adiciona a palavra e seu código ao objeto de códigos
    if (no.valor !== null) {
        codigos[no.valor] = codigoAtual;
        return;
    }

    // Percorre os filhos da árvore recursivamente para gerar os códigos
    for (let chave in no.filhos) {
        gerarCodigosTreeOrder60(no.filhos[chave], codigoAtual + chave, codigos);
    }
}

// Função para compactar o array de palavras usando os códigos TreeOrder60
function compactarTreeOrder60(palavras) {
    // Construir a árvore TreeOrder60
    const arvoreTreeOrder60 = construirArvoreTreeOrder60(palavras);

    // Gerar os códigos TreeOrder60
    const codigos = {};
    gerarCodigosTreeOrder60(arvoreTreeOrder60, '', codigos);

    // Compactar o array de palavras usando os códigos TreeOrder60
    let textoCompactado = '';
    for (let palavra of palavras) {
        textoCompactado += codigos[palavra];
    }

    // Retornar o array de palavras compactado e os códigos TreeOrder60 para descompactação
    return { textoCompactado, codigos };
}

// Função para descompactar o texto compactado usando os códigos TreeOrder60
function descompactarTreeOrder60(textoCompactado, codigos) {
    // Inverter o objeto de códigos para facilitar a descompactação
    const codigosInvertidos = {};
    for (let palavra in codigos) {
        codigosInvertidos[codigos[palavra]] = palavra;
    }

    // Descompactar o texto usando os códigos NineBranches
    let textoDescompactado = '';
    let codigoAtual = '';
    for (let bit of textoCompactado) {
        codigoAtual += bit;
        if (codigoAtual in codigosInvertidos) {
            textoDescompactado += codigosInvertidos[codigoAtual];
            codigoAtual = '';
        }
    }

    // Retornar o texto descompactado
    return textoDescompactado;
}

// Função para processar o texto em palavras
function processarTexto(texto) {
    // Usar uma expressão regular para dividir o texto em palavras
    return texto.match(/\S+|\w+|\s+/gu);
}

// Exemplo de uso
const textoOriginal = "As Árvores de Decisão Adaptativa (ADT), também conhecidas como árvores de Huffman adaptativas, são uma variante das árvores de Huffman tradicionais. Enquanto a Árvore de Huffman estática é construída com base nas frequências de ocorrência dos símbolos no conjunto de dados de entrada, as ADTs modificam sua estrutura dinamicamente à medida que os símbolos são codificados. A principal característica das ADTs é sua capacidade de se adaptar às mudanças nas frequências dos símbolos durante o processo de codificação. Isso é particularmente útil em situações onde as estatísticas dos símbolos não são conhecidas com antecedência ou mudam ao longo do tempo. Aqui estão algumas características das Árvores de Decisão Adaptativas: Construção Dinâmica: As ADTs são construídas à medida que os símbolos são processados. Inicialmente, a árvore pode começar vazia ou com uma estrutura mínima e, conforme os símbolos são encontrados, a árvore é ajustada para acomodar esses símbolos.";
console.log('Texto original:', textoOriginal);

// Processar o texto em palavras
const palavras = processarTexto(textoOriginal);
console.log('Palavras:', palavras);

// Compactar o array de palavras usando TreeOrder60
const resultadoCompactacao = compactarTreeOrder60(palavras);
console.log('Texto compactado:', resultadoCompactacao.textoCompactado);
console.log('Códigos TreeOrder60:', resultadoCompactacao.codigos);

// Descompactar o texto compactado usando TreeOrder60
const palavrasDescompactadas = descompactarTreeOrder60(resultadoCompactacao.textoCompactado, resultadoCompactacao.codigos);
console.log('Palavras descompactadas:', palavrasDescompactadas);
