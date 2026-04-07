const notaPrimeiroBi = 7;
const notaSegundoBi = 8;
const notaTerceiroBi = 6;
const notaQuartoBi = 9;

let total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (total > 7) {
    total += total * 0.1; // Aumenta a média em 10%
    console.log('Aluno aprovado com média:', total);    
} else {
    console.log('Aluno reprovado.');
}