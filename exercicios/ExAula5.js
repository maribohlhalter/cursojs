function saudacao (nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Maria")); // Chama a função para exibir a saudação para Maria

//

function confereIdade (idade) {
    if (idade >= 18) {
        return "Você é maior de idade.";
    } else {
        return "Você é menor de idade.";
    }
}

console.log(confereIdade(20)); // Chama a função para verificar a idade de 20 anos

//

function palindromo (palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    if (palavra === palavraInvertida) {
        return "A palavra é um palíndromo.";
    } else {
        return "A palavra não é um palíndromo.";
    }

}

console.log(palindromo("arara")); // Chama a função para verificar se "arara" é um palíndromo

//

function maiorNum (num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;

    }
}

console.log(maiorNum(5, 10, 3)); // Chama a função para encontrar o maior número entre 5, 10 e 3

//

const calcularPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
}

console.log(calcularPotencia(2, 3)); // Chama a função para calcular 2 elevado a 3