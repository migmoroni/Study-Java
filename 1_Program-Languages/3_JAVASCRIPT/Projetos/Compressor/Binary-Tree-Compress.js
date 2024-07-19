// Definindo a classe para um nó da árvore de Huffman
class Node {
    constructor(char, frequencia) {
        this.char = char;
        this.frequencia = frequencia;
        this.esquerda = null;
        this.direita = null;
    }
}

// Função para construir a árvore de Huffman a partir de uma string de entrada
function construirArvoreHuffman(texto) {
    // Contagem da frequência de cada caractere na string
    const frequencias = {};
    for (let char of texto) {
        frequencias[char] = (frequencias[char] || 0) + 1;
    }

    // Criar uma lista de nós para cada caractere e sua frequência
    const listaNos = Object.entries(frequencias).map(([char, frequencia]) => new Node(char, frequencia));

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
    // Se o nó é uma folha, adiciona o caractere e seu código ao objeto de códigos
    if (no.char !== null) {
        codigos[no.char] = codigoAtual;
        return;
    }

    // Percorre a árvore recursivamente para gerar os códigos
    gerarCodigosHuffman(no.esquerda, codigoAtual + '0', codigos);
    gerarCodigosHuffman(no.direita, codigoAtual + '1', codigos);
}

// Função para compactar a string usando os códigos Huffman
function compactarHuffman(texto) {
    // Construir a árvore de Huffman
    const arvoreHuffman = construirArvoreHuffman(texto);

    // Gerar os códigos Huffman
    const codigos = {};
    gerarCodigosHuffman(arvoreHuffman, '', codigos);

    // Compactar a string usando os códigos Huffman
    let textoCompactado = '';
    for (let char of texto) {
        textoCompactado += codigos[char];
    }

    // Retornar a string compactada e os códigos Huffman para descompactação
    return { textoCompactado, codigos };
}

// Função para descompactar a string usando os códigos Huffman
function descompactarHuffman(textoCompactado, codigos) {
    // Inverter o objeto de códigos para facilitar a descompactação
    const codigosInvertidos = {};
    for (let char in codigos) {
        codigosInvertidos[codigos[char]] = char;
    }

    // Descompactar a string usando os códigos Huffman
    let textoDescompactado = '';
    let codigoAtual = '';
    for (let bit of textoCompactado) {
        codigoAtual += bit;
        if (codigoAtual in codigosInvertidos) {
            textoDescompactado += codigosInvertidos[codigoAtual];
            codigoAtual = '';
        }
    }

    // Retornar a string descompactada
    return textoDescompactado;
}

// Exemplo de uso
const textoOriginal = "abracadabra";
console.log('Texto original:', textoOriginal);

// Compactar o texto usando Huffman
const resultadoCompactacao = compactarHuffman(textoOriginal);
console.log('Texto compactado:', resultadoCompactacao.textoCompactado);
console.log('Códigos Huffman:', resultadoCompactacao.codigos);

// Descompactar o texto usando Huffman
const textoDescompactado = descompactarHuffman(resultadoCompactacao.textoCompactado, resultadoCompactacao.codigos);
console.log('Texto descompactado:', textoDescompactado);
