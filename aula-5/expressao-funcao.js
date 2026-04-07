let estudanteReprovou  = function (notas, faltas) {
    if (notas < 6 || faltas > 10) {
        return true; // O estudante reprovou
    } else {
        return false; // O estudante passou
    }

}

console.log (estudanteReprovou(5, 8)); // true, pois a nota é menor que 6
console.log (estudanteReprovou(7, 12)); // true, pois as faltas são maiores que 10