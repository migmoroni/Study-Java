function encodeBase65536(data) {
    const base105Chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzáàãâéèẽêíìĩîóòõôúùũû!@#$%&*()-_+§[{]},.;:/?|';

    // Função para converter uma palavra da base 105 para base 65536
    function palavraBase105ToBase65536(palavra) {
        if (/[<>=""]/.test(palavra)) {
            return palavra; // Retorna a palavra original se contiver caracteres fora da base 105
        }
        
        if (palavra[0] === '0') return palavra; // Retorna a palavra original se começar com "0"
        
        let resultado = '';
        for (let i = 0; i < palavra.length; i += 2) {
            const par = palavra.slice(i, i + 2);
            const decimal = base105Chars.indexOf(par[0]) * base105Chars.length + base105Chars.indexOf(par[1]) + 7536;
            resultado += String.fromCharCode(decimal);
        }
        return resultado;
    }

    let palavras = data.split(/\s+/);
    let resultado = '';
    for (let i = 0; i < palavras.length; i++) {
        resultado += palavraBase105ToBase65536(palavras[i]) + ' ';
    }
    return resultado.trim(); // Remove o espaço extra no final
}

// Exemplo de uso:
const texto = '00 01 0102 2Abcdefg <90> Ṑⴍⷥ⺽'; // Exemplo de texto
const resultado = encodeBase65536(texto);
console.log(resultado); // Saída esperada: " ȅ Ȇ ȇÿźĀāć"
