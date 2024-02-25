function encontrarDivisores(numero) {
    let divisores = [];
    
    // Percorre todos os números de 1 até o número dado
    for (let i = 1; i <= numero; i++) {
        // Se o número for divisível pelo iterador, adiciona à lista de divisores
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    
    return divisores;
}

// Exemplo de uso
const numero = 354816;
const divisores = encontrarDivisores(numero);
console.log("Os divisores de", numero, "são:", divisores);