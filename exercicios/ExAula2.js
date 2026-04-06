//1
let numero = 5;
let nome = 'Mariana';
let booleano = true;

console.log(numero);
console.log(nome);
console.log(booleano);

//2
const primeiroNome = 'Arthur';
const sobrenome = 'Caleffi';
const nomeCompleto = primeiroNome + ' ' + sobrenome;

//operador: const nomeCompleto = primeiroNome + ' ' + sobrenome;
//tamplate string: nomeCompleto = `${primeiroNome} ${sobrenome}`;

console.log(nomeCompleto);

//3 
let num = 10;
let string = 'amor';

let frase = `o número ${num} é maior que a palavra ${string}`;

console.log(frase);

//4
let minhaVariavel = 'primeiro valor';
console.log(minhaVariavel);

minhaVariavel = 'segundo valor';
console.log(minhaVariavel); 

//5

var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

/////////////////////

let fora1 = 'Fora do bloco';

if (true) {
    let dentro = 'Dentro do bloco';
    console.log(fora1); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora1); // retorna 'Fora do bloco'
//console.log(dentro); // erro 'dentro is not defined'

//6

const estaChovendo = true;

if (estaChovendo) {
    console.log('Está chovendo, leve um guarda-chuva!');
} else {
    console.log('Não está chovendo, aproveite o dia!');
}
