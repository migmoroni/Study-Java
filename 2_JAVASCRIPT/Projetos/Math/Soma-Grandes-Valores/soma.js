function addStrings(str1, str2) {
    let carry = 0;
    let result = '';
    let maxLength = Math.max(str1.length, str2.length);

    for (let i = 0; i < maxLength; i++) {
        let digit1 = parseInt(str1.charAt(str1.length - 1 - i)) || 0;
        let digit2 = parseInt(str2.charAt(str2.length - 1 - i)) || 0;
        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    if (carry) {
        result = carry + result;
    }

    return result;
}

function subtractStrings(str1, str2) {
    // Verifica se os números são negativos
    let isNegative1 = str1.startsWith('-');
    let isNegative2 = str2.startsWith('-');

    // Remove o sinal negativo dos números
    //str1 = isNegative1 ? str1.substring(1) : str1;
    //str2 = isNegative2 ? str2.substring(1) : str2;

    // Adiciona o sinal negativo de volta ao resultado, se necessário
    let negativeResult = false;

    // Verifica se str1 é menor que str2 (para garantir um resultado negativo)
    if (!isNegative1 && !isNegative2 && compareStrings(str1, str2) < 0) {
        negativeResult = true;
        [str1, str2] = [str2, str1]; // Troca os números
    }

    let borrow = 0;
    let result = '';

    // Itera pelos dígitos
    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        let digit1 = parseInt(str1.charAt(str1.length - 1 - i)) || 0;
        let digit2 = parseInt(str2.charAt(str2.length - 1 - i)) || 0;

        let diff = digit1 - digit2 - borrow;

        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }

        result = diff + result;
    }

    // Adiciona o sinal negativo ao resultado, se necessário
    if (negativeResult) {
        result = '-' + result;
    }

    // Remove zeros à esquerda do resultado
    result = result.replace(/^(-?)0+(?=[1-9])/, '$1');

    return result || '0';
}

function multiplyStrings(str1, str2) {
    let result = '0';

    for (let i = str2.length - 1; i >= 0; i--) {
        let digit2 = parseInt(str2.charAt(i));
        let tempResult = '';

        let carry = 0;
        for (let j = str1.length - 1; j >= 0 || carry; j--) {
            let digit1 = parseInt(str1.charAt(j)) || 0;
            let product = digit1 * digit2 + carry;
            carry = Math.floor(product / 10);
            tempResult = (product % 10) + tempResult;
        }

        tempResult += '0'.repeat(str2.length - 1 - i);
        result = addStrings(result, tempResult);
    }

    return result;
}

function divideStrings(dividend, divisor) {
    let quotient = '';
    let remainder = '';
    let idx = 0;

    // Processo de divisão
    while (idx < dividend.length) {
        remainder += dividend[idx];
        let count = 0;

        // Enquanto o divisor ainda cabe no restante do dividendo, subtrai
        while (compareStrings(remainder, divisor) >= 0) {
            remainder = subtractStrings(remainder, divisor);
            count++;
        }

        // Adiciona o resultado da divisão ao quociente
        quotient += count;
        idx++;

        // Ignora os zeros à esquerda no resto
        remainder = remainder.replace(/^0+/, '');
    }

    // Ignora os zeros à esquerda no quociente
    quotient = quotient.replace(/^0+/, '');

    return quotient || '0';
}

// Função de comparação de strings
function compareStrings(str1, str2) {
    if (str1.length !== str2.length) {
        return str1.length - str2.length;
    }
    return str1.localeCompare(str2);
}

// Exemplo de uso:
let num1 = '106000';
let num2 = '3';
let num3 = '107000';
let num4 = '-40'


console.log(addStrings(num1, num2));
console.log(multiplyStrings(num1, num2));
console.log(divideStrings(num1, num2));

console.log(subtractStrings(num1, num2));
console.log(subtractStrings(num1, num3));
console.log(subtractStrings(num1, num4));