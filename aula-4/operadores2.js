const notaFinal = 9;
const faltas = 15;
const advertencias = 0;

if (notaFinal < 7 && faltas > 10) {
    console.log('Aluno reprovado.');
} else {
    console.log('Aluno aprovado.');
}

if (faltas <= 2 && !advertencias) {
    notaFinal += 0.5; // Aumenta a nota final em 0.5
    console.log('Aluno aprovado com mérito, nota final:', notaFinal);
} else {
    console.log('Aluno aprovado sem mérito, nota final:', notaFinal);
}