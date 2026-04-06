let saldo = 1000;
let deposito = 500;
let saque = 200;

let operação = (saldo + deposito) - saque;

console.log("O saldo final é: " + operação);

//2

let valor = 11;

if (valor % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

//const numero = 7;
//const resultado = numero % 2 === 0 ? 'Par' : 'Ímpar';
//console.log(resultado); // Ímpar

//3

let acesso = true;
let permisao = false;

if (acesso && permisao) {
    console.log("Acesso concedido.");
} else {
    console.log("Acesso negado.");
}

//4

let condicao1 = true;
let condicao2 = false;

let resultado = condicao1 || condicao2;

console.log("O resultado da operação lógica é: " + resultado);

//5 

const idadeMin = 18;
const idadePessoa = 20;

if (idadePessoa >= idadeMin) {
    console.log("A pessoa é maior de idade.");
} else {
    console.log("A pessoa é menor de idade.");
}