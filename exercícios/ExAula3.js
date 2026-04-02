//1
const frase = 'Olá, mundo!';
console.log(frase.length);
console.log(frase.toUpperCase());

//2
const valorNull = null;
console.log(valorNull);
const valorUndefined = undefined;
console.log(valorUndefined);

//3
const numero = 10;
const texto2 =' é a resposta.';
const booleano = true;

const resultado = `${numero} ${texto2} é verdadeiro? ${booleano}`;
console.log(resultado);

//4
const number = 10;
const string = '10';

const convertido1 = Number(string);
const convertido2 = String(number);

console.log(typeof convertido1);
console.log(typeof convertido2);

//5
const texto = 'JavaScript é incrível!';

const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const parteDaString = texto.slice(0, 10);

console.log('Texto em maiúsculas:', maiusculas);
console.log('Texto em minúsculas:', minusculas);
console.log('Parte da string:', parteDaString);