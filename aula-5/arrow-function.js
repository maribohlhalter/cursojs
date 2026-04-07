 const estudanteReprovou = (notas, faltas) => {
    if (notas < 6 || faltas > 10) {
        return true; // O estudante reprovou
    } else {
        return false; // O estudante passou
    }
 }

 const exibirInfos = (nome) => nome; // Retorna o nome diretamente, sem a necessidade de usar console.log