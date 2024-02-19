function embaralharValores(valor1, valor2, valor3) {
    const listaIndices = [5, 9, 9, 4, 7, 6, 7, 5, 8, 5, 6, 16, 7, 7, 9];
    // Combina os três valores em uma string
    let combinedString = 'a' + valor1.toString() + valor2.toString() + valor3.toString();
  
    // Converte a string combinada em um array de caracteres
    let arrayDeCaracteres = combinedString.split('');

    // Algoritmo de Fisher-Yates moderno para embaralhar eficazmente
    for (let i = arrayDeCaracteres.length - 1; i > 0; i--) {
        const j = Math.floor(listaIndices[i] + (i + 1));
        [arrayDeCaracteres[i], arrayDeCaracteres[j]] = [arrayDeCaracteres[j], arrayDeCaracteres[i]];
    }
  
    // Retorna a string resultante do terceiro nível de embaralhamento
    return arrayDeCaracteres.join('');
  }
  
  // Exemplo de uso
  const valorEmbaralhado = embaralharValores(42, 'abc', 7);
  console.log(valorEmbaralhado);