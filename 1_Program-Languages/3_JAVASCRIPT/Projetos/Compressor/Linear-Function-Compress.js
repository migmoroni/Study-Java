// Função para compactar os dados usando uma função linear simples (com um coeficiente e um deslocamento)
function compactarDados(dados) {
    // Calcular o coeficiente e o deslocamento da função linear
    const soma = dados.reduce((total, valor) => total + valor, 0);
    const media = soma / dados.length;
    const coeficiente = 2; // Pode ser ajustado conforme necessário
    const deslocamento = media * (1 - coeficiente);

    // Compactar os dados aplicando a função linear
    const dadosCompactados = dados.map(valor => coeficiente * valor + deslocamento);

    // Retornar os dados compactados e os parâmetros da função linear
    return { dados: dadosCompactados, coeficiente, deslocamento };
}

// Função para descompactar os dados usando a função linear inversa
function descompactarDados(dadosCompactados, coeficiente, deslocamento) {
    // Descompactar os dados aplicando a função linear inversa
    const dadosDescompactados = dadosCompactados.map(valor => (valor - deslocamento) / coeficiente);

    // Retornar os dados descompactados
    return dadosDescompactados;
}

// Exemplo de uso
const dadosOriginais = [10, 20, 30, 40, 50];
console.log('Dados originais:', dadosOriginais);

// Compactar os dados
const resultadoCompactacao = compactarDados(dadosOriginais);
console.log('Dados compactados:', resultadoCompactacao.dados);
console.log('Coeficiente:', resultadoCompactacao.coeficiente);
console.log('Deslocamento:', resultadoCompactacao.deslocamento);

// Descompactar os dados
const dadosDescompactados = descompactarDados(resultadoCompactacao.dados, resultadoCompactacao.coeficiente, resultadoCompactacao.deslocamento);
console.log('Dados descompactados:', dadosDescompactados);