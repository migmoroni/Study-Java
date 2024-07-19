function reduzirStringExistente(str, comprimentoAlvo) {
    if (str.length > comprimentoAlvo) {
      return str.substring(0, comprimentoAlvo);
    }
    return str;
}
  
  // Exemplo de uso
  const valor = 'Esta é uma string longa que será reduzida.';
  const tamanho = 21;
  const stringReduzida = reduzirStringExistente(valor, tamanho);
  
  console.log(stringReduzida);  // Saída: "Esta é uma string lo"
  