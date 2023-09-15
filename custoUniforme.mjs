let i = 0
export default function custoUniforme(eightPuzzle) {
    if (!eightPuzzle.visitados.find((el) => el === JSON.stringify(eightPuzzle.estado))) {
        eightPuzzle.setAbertos(eightPuzzle.estado);
    } else {
        eightPuzzle.getAbertos().shift()
        eightPuzzle.estado = JSON.parse(JSON.stringify(eightPuzzle.getAbertos()[0]));
        eightPuzzle.calculaTuplaPosicaoZero();
        console.log('Estado já visitado. Pulando para o próximo nodo.');
        console.log(eightPuzzle.estado);
        console.log('\n');
    }
    i++
    if (i > 100000) {
        return 'Não foi possível encontrar o estado final.';
    }
    if (JSON.stringify(eightPuzzle.estado) !== JSON.stringify(eightPuzzle.estadoFinal)) {
        eightPuzzle.setVisitados(JSON.stringify(eightPuzzle.estado));
        let nodos = produzNodosFilhos(eightPuzzle);

        for ( let nodo of nodos['filhos']) {

            adicionarCusto(nodo, eightPuzzle);
        }
        custoUniforme(eightPuzzle);
    }
    eightPuzzle.getAbertos().shift();
    eightPuzzle.setVisitados(JSON.stringify(eightPuzzle.estado));
    console.log('Abertos: ');
    console.log(eightPuzzle.getAbertos());
    console.log('\n');
    console.log('Visitados: ');
    console.log(eightPuzzle.getVisitados());
    console.log('\n');
    return eightPuzzle.getVisitados().length + ' nodos visitados. \n' + eightPuzzle.estado + ' estado após ultimo nodo visitado.\n' + eightPuzzle.estadoFinal + ' estado final.' + '\n' + eightPuzzle.caminho + ' caminho percorrido. \n';
}

function adicionarCusto(nodo, eightPuzzle) {
    eightPuzzle.caminho += nodo + ' -> ';
    estadoAberto(nodo, eightPuzzle);
}

function estadoAberto(nodo, eightPuzzle) {
    let estadoTemporario = JSON.parse(JSON.stringify(eightPuzzle.estado));
    let pecaMovimentada = eightPuzzle.estado[nodo[0]][nodo[1]];
    estadoTemporario[nodo[0]][nodo[1]] = 0;
    const tuplaDoZero = eightPuzzle.getTuplaPosicaoZero();
    estadoTemporario[tuplaDoZero[0]][tuplaDoZero[1]] = pecaMovimentada;
    eightPuzzle.setAbertos(estadoTemporario);
    return estadoTemporario;
}

function produzNodosFilhos(eightPuzzle) {
    let nodos = {
        'filhos': []
    };
    let tuplaPosicaoZero = eightPuzzle.calculaTuplaPosicaoZero();
    let linhaDaTupla = tuplaPosicaoZero[0];
    let colunaDaTupla = tuplaPosicaoZero[1];
    if (linhaDaTupla + 1 < 3) {
        nodos['filhos'].push( [linhaDaTupla + 1,colunaDaTupla ]);
    }
    if (linhaDaTupla - 1 >= 0) {
        nodos['filhos'].push([linhaDaTupla - 1,colunaDaTupla ]);
    }
    if (colunaDaTupla + 1 < 3) {
        nodos['filhos'].push([linhaDaTupla,colunaDaTupla + 1]);
    }
    if (colunaDaTupla - 1 >= 0) {
        nodos['filhos'].push([linhaDaTupla,colunaDaTupla - 1]);
    }
    return nodos;
}
