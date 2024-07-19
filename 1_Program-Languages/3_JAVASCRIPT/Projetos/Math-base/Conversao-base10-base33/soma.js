function sumInBase33(number1, number2) {
    // Definir os caracteres da base 33
    const base33Chars = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";

    // Inverter as strings e converter para array de caracteres
    const array1 = number1.split("").reverse();
    const array2 = number2.split("").reverse();

    // Inicializar variáveis
    let carry = 0;
    let result = "";

    // Percorrer os dígitos
    for (let i = 0; i < Math.max(array1.length, array2.length) || carry; i++) {
        // Obter os dígitos individuais
        const digit1 = base33Chars.indexOf(array1[i] || '0');
        const digit2 = base33Chars.indexOf(array2[i] || '0');

        // Somar os dígitos e o carry
        const sum = digit1 + digit2 + carry;

        // Calcular o novo carry
        carry = Math.floor(sum / 33);

        // Adicionar o dígito resultante à resposta
        result = base33Chars[sum % 33] + result;
    }

    return result;
}

// Exemplo de uso
const num1 = "A";  // Representa o valor 10 em base 10
const num2 = "B";  // Representa o valor 11 em base 10

const sumResult = sumInBase33(num1, num2);
console.log("Resultado da soma em base 33:", sumResult);