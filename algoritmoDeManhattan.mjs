export const algoritmoDeManhattan = (estado, estadoFinal) => {
    let soma = 0;
    estado.forEach( (linha, l) => {
        linha.forEach( (coluna, c) => {
            if (coluna !== 0) {
                const tupla = calculaTupla(coluna, estadoFinal);
                soma += Math.abs(l - tupla[0]) + Math.abs(c - tupla[1]);
            }
        });
    });
    return soma;
}

const calculaTupla = (numero, estadoFinal) => {
    let tupla = [];
    estadoFinal.forEach( (linha, l) => {
        linha.forEach( (coluna, c) => {
            if (numero === coluna) {
                tupla = [l, c];
            }
        });
    });
    return tupla;
}