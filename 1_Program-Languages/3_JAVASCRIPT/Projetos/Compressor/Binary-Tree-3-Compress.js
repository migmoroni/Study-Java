// Definindo a classe para um nó da árvore de NineBranches
class Node {
    constructor(valor, frequencia) {
        this.valor = valor;
        this.frequencia = frequencia;
        this.filhos = {};
    }
}

// Função para construir a árvore de NineBranches a partir de um array de palavras
function construirArvoreNineBranches(palavras) {
    // Contagem da frequência de cada palavra no array
    const frequencias = {};
    for (let palavra of palavras) {
        frequencias[palavra] = (frequencias[palavra] || 0) + 1;
    }

    // Criar uma lista de nós para cada palavra e sua frequência
    const listaNos = Object.entries(frequencias).map(([palavra, frequencia]) => new Node(palavra, frequencia));

    // Construir a árvore de NineBranches
    while (listaNos.length > 1) {
        // Ordenar os nós pela frequência
        listaNos.sort((a, b) => a.frequencia - b.frequencia);

        // Extrair os nós com menor frequência
        const filhos = listaNos.splice(0, 9);

        // Criar um novo nó pai com a soma das frequências e re-adicionar à lista
        const pai = new Node(null, filhos.reduce((acc, curr) => acc + curr.frequencia, 0));
        filhos.forEach((filho, index) => pai.filhos[index + 1] = filho);
        listaNos.push(pai);
    }

    // Retornar o nó raiz da árvore de NineBranches
    return listaNos[0];
}

// Função para gerar códigos NineBranches recursivamente
function gerarCodigosNineBranches(no, codigoAtual, codigos) {
    // Se o nó é uma folha, adiciona a palavra e seu código ao objeto de códigos
    if (no.valor !== null) {
        codigos[no.valor] = codigoAtual;
        return;
    }

    // Percorre os filhos da árvore recursivamente para gerar os códigos
    for (let chave in no.filhos) {
        gerarCodigosNineBranches(no.filhos[chave], codigoAtual + chave, codigos);
    }
}

// Função para compactar o array de palavras usando os códigos NineBranches
function compactarNineBranches(palavras) {
    // Construir a árvore de NineBranches
    const arvoreNineBranches = construirArvoreNineBranches(palavras);

    // Gerar os códigos NineBranches
    const codigos = {};
    gerarCodigosNineBranches(arvoreNineBranches, '', codigos);

    // Compactar o array de palavras usando os códigos NineBranches
    let textoCompactado = '';
    for (let palavra of palavras) {
        textoCompactado += codigos[palavra];
    }

    // Retornar o array de palavras compactado e os códigos NineBranches para descompactação
    return { textoCompactado, codigos };
}

// Função para descompactar o texto compactado usando os códigos NineBranches
function descompactarNineBranches(textoCompactado, codigos) {
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
    // Remover pontuação e caracteres especiais e converter para letras minúsculas
    return texto.match(/\S+|\w+|\s+/gu);
}

// Exemplo de uso
const textoOriginal = "As Árvores de Decisão Adaptativa (ADT), também conhecidas como árvores de Huffman adaptativas, são uma variante das árvores de Huffman tradicionais. Enquanto a Árvore de Huffman estática é construída com base nas frequências de ocorrência dos símbolos no conjunto de dados de entrada, as ADTs modificam sua estrutura dinamicamente à medida que os símbolos são codificados. A principal característica das ADTs é sua capacidade de se adaptar às mudanças nas frequências dos símbolos durante o processo de codificação. Isso é particularmente útil em situações onde as estatísticas dos símbolos não são conhecidas com antecedência ou mudam ao longo do tempo. Aqui estão algumas características das Árvores de Decisão Adaptativas: Construção Dinâmica: As ADTs são construídas à medida que os símbolos são processados. Inicialmente, a árvore pode começar vazia ou com uma estrutura mínima e, conforme os símbolos são encontrados, a árvore é ajustada para acomodar esses símbolos."



console.log('Texto original:', textoOriginal);

// Processar o texto em palavras
const palavras = processarTexto(textoOriginal);
console.log('Palavras:', palavras);

// Compactar o array de palavras usando NineBranches
const resultadoCompactacao = compactarNineBranches(palavras);
console.log('Texto compactado:', resultadoCompactacao.textoCompactado);
console.log('Códigos NineBranches:', resultadoCompactacao.codigos);

// Descompactar o texto compactado usando NineBranches
const palavrasDescompactadas = descompactarNineBranches(resultadoCompactacao.textoCompactado, resultadoCompactacao.codigos);
console.log('Palavras descompactadas:', palavrasDescompactadas);
