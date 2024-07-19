function embaralharValores(valor1, valor2, valor3) {
    // Combina os três valores em uma string
    let combinedString = valor1.toString() + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + valor2.toString() + valor3.toString();
  
    // Converte a string combinada em um array de caracteres
    let arrayDeCaracteres = combinedString.split('');
  
    // Primeiro nível de embaralhamento: troca os caracteres de posição em pares consecutivos
    for (let i = 0; i < arrayDeCaracteres.length - 1; i += 2) {
      [arrayDeCaracteres[i], arrayDeCaracteres[i + 1]] = [arrayDeCaracteres[i + 1], arrayDeCaracteres[i]];
    }
  
    // Segundo nível de embaralhamento: troca os caracteres de posição a cada 5 caracteres
    for (let i = 0; i < arrayDeCaracteres.length - 4; i += 7) {
      [arrayDeCaracteres[i], arrayDeCaracteres[i + 4]] = [arrayDeCaracteres[i + 4], arrayDeCaracteres[i]];
      [arrayDeCaracteres[i + 1], arrayDeCaracteres[i + 3]] = [arrayDeCaracteres[i + 3], arrayDeCaracteres[i + 1]];
    }
  
    // Retorna a string resultante do terceiro nível de embaralhamento
    return arrayDeCaracteres.join('');
  }
  
  // Exemplo de uso
  const valorEmbaralhado = embaralharValores(42, 'abc', 7);
  console.log(valorEmbaralhado);