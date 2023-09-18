import Estado from "./estado.mjs";
export const heuristicaPrecisa = eightPuzzle => {
    let i = 0;
    while(JSON.stringify(eightPuzzle.objEstado.estado) !== JSON.stringify(eightPuzzle.estadoFinal)) {
        i++
        if (i > 1000000) {
            return 'Não foi possível encontrar o estado final.';
        }
        if (!eightPuzzle.visitados.find((el) => JSON.stringify(el.estado) === JSON.stringify(eightPuzzle.objEstado.estado))) {
            eightPuzzle.setAbertos(JSON.parse(JSON.stringify(eightPuzzle.objEstado)));
        } else {
            eightPuzzle.objEstado =JSON.parse(JSON.stringify(eightPuzzle.getAbertos()[0]));
            eightPuzzle.calculaTuplaPosicaoZero();
        }
        if (!eightPuzzle.visitados.find((el) => JSON.stringify(el.estado) === JSON.stringify(eightPuzzle.objEstado.estado))) {
            eightPuzzle.setVisitados(JSON.parse(JSON.stringify(eightPuzzle.objEstado)));
        }
        const nodos = produzNodosFilhos(eightPuzzle);
        for ( const nodo of nodos) {
            adicionarCusto(nodo, eightPuzzle);
        };
        const indiceRemover = eightPuzzle.getAbertos().findIndex( (el) => JSON.stringify(el.estado) === JSON.stringify(eightPuzzle.objEstado.estado));
        eightPuzzle.getAbertos().splice(indiceRemover, 1);
    }
    let abertos = JSON.parse(JSON.stringify(eightPuzzle.getAbertos()))
    abertos.shift();
    let visitados = JSON.parse(JSON.stringify(eightPuzzle.getVisitados()))
    return visitados.length + ' nodos visitados. \n' + JSON.stringify(eightPuzzle.objEstado.estado) + ' estado final.' + '\n' + eightPuzzle.getCaminho() + ' caminho percorrido. \n';
}

function adicionarCusto(nodo, eightPuzzle) {
    if (JSON.stringify(eightPuzzle.objEstado.estado) !== JSON.stringify(eightPuzzle.estadoFinal)) {
        let estadoTemporario = JSON.parse(JSON.stringify(eightPuzzle.objEstado.estado));
        let pecaMovimentada = eightPuzzle.objEstado.estado[nodo[0]][nodo[1]];
        estadoTemporario[nodo[0]][nodo[1]] = 0;
        const tuplaDoZero = eightPuzzle.getTuplaPosicaoZero();
        estadoTemporario[tuplaDoZero[0]][tuplaDoZero[1]] = pecaMovimentada;
        if (!eightPuzzle.getVisitados().find((el) => JSON.stringify(el.estado) === JSON.stringify(estadoTemporario))) {
            const estadoObj = new Estado(estadoTemporario, eightPuzzle.objEstado.estado);
            //-----------------heuristica precisa-----------------
            const nivelDoPai = eightPuzzle.objEstado.nivel;
            estadoObj.setNivel( nivelDoPai + 1);
            estadoObj.setCustoMelhorHeuristica(estadoObj.nivel);
            eightPuzzle.setAbertos(estadoObj, true);
            //----------------------------------------------------
        }
    }
}

function produzNodosFilhos(eightPuzzle) {
    let nodos = [];
    let tuplaPosicaoZero = eightPuzzle.calculaTuplaPosicaoZero();
    let linha = tuplaPosicaoZero[0];
    let coluna = tuplaPosicaoZero[1];
    if (linha + 1 < 3) {
        nodos.push( [linha + 1,coluna ]);
    }
    if (linha - 1 >= 0) {
        nodos.push([linha - 1,coluna ]);
    }
    if (coluna + 1 < 3) {
        nodos.push([linha,coluna + 1]);
    }
    if (coluna - 1 >= 0) {
        nodos.push([linha,coluna - 1]);
    }
    return nodos;
}
