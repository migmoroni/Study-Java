// Definindo a classe para um nó da árvore de Huffman
class Node {
    constructor(palavra, frequencia) {
        this.palavra = palavra;
        this.frequencia = frequencia;
        this.esquerda = null;
        this.direita = null;
    }
}

// Função para construir a árvore de Huffman a partir de um array de palavras
function construirArvoreHuffman(palavras) {
    // Contagem da frequência de cada palavra no array
    const frequencias = {};
    for (let palavra of palavras) {
        frequencias[palavra] = (frequencias[palavra] || 0) + 1;
    }

    // Criar uma lista de nós para cada palavra e sua frequência
    const listaNos = Object.entries(frequencias).map(([palavra, frequencia]) => new Node(palavra, frequencia));

    // Construir a árvore de Huffman
    while (listaNos.length > 1) {
        // Ordenar os nós pela frequência
        listaNos.sort((a, b) => a.frequencia - b.frequencia);

        // Extrair os dois nós com menor frequência
        const esquerda = listaNos.shift();
        const direita = listaNos.shift();

        // Criar um novo nó pai com a soma das frequências e re-adicionar à lista
        const pai = new Node(null, esquerda.frequencia + direita.frequencia);
        pai.esquerda = esquerda;
        pai.direita = direita;
        listaNos.push(pai);
    }

    // Retornar o nó raiz da árvore de Huffman
    return listaNos[0];
}

// Função para gerar códigos Huffman recursivamente
function gerarCodigosHuffman(no, codigoAtual, codigos) {
    // Se o nó é uma folha, adiciona a palavra e seu código ao objeto de códigos
    if (no.palavra !== null) {
        codigos[no.palavra] = codigoAtual;
        return;
    }

    // Percorre a árvore recursivamente para gerar os códigos
    gerarCodigosHuffman(no.esquerda, codigoAtual + '0', codigos);
    gerarCodigosHuffman(no.direita, codigoAtual + '1', codigos);
}

// Função para compactar o array de palavras usando os códigos Huffman
function compactarHuffman(palavras) {
    // Construir a árvore de Huffman
    const arvoreHuffman = construirArvoreHuffman(palavras);

    // Gerar os códigos Huffman
    const codigos = {};
    gerarCodigosHuffman(arvoreHuffman, '', codigos);

    // Compactar o array de palavras usando os códigos Huffman
    let textoCompactado = '';
    for (let palavra of palavras) {
        textoCompactado += codigos[palavra];
    }

    // Retornar o array de palavras compactado e os códigos Huffman para descompactação
    return { textoCompactado, codigos };
}

// Função para descompactar o texto compactado usando os códigos Huffman
function descompactarHuffman(textoCompactado, codigos) {
    // Inverter o objeto de códigos para facilitar a descompactação
    const codigosInvertidos = {};
    for (let palavra in codigos) {
        codigosInvertidos[codigos[palavra]] = palavra;
    }

    // Descompactar o texto usando os códigos Huffman
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
    return textoDescompactado.split(' ');
}

// Função para processar o texto em palavras
function processarTexto(texto) {
    // Remover pontuação e caracteres especiais e converter para letras minúsculas
    return texto.toLowerCase();
}

// Exemplo de uso
const textoOriginal = "A aranha arranha a ra. A ra arranha a aranha.";
console.log('Texto original:', textoOriginal);

// Processar o texto em palavras
const palavras = processarTexto(textoOriginal);
console.log('Palavras:', palavras);

// Compactar o array de palavras usando Huffman
const resultadoCompactacao = compactarHuffman(palavras);
console.log('Texto compactado:', resultadoCompactacao.textoCompactado);
console.log('Códigos Huffman:', resultadoCompactacao.codigos);

// Descompactar o texto compactado usando Huffman
const palavrasDescompactadas = descompactarHuffman(resultadoCompactacao.textoCompactado, resultadoCompactacao.codigos);
console.log('Palavras descompactadas:', palavrasDescompactadas);
