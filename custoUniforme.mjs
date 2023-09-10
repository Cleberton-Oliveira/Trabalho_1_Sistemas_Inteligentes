let i = 0
export default function custoUniforme(eightPuzzle) {
    i++
    if (i > 10) {
        return 'Não foi possível encontrar o estado final.';
    }

    if (JSON.stringify(eightPuzzle.estado) !== JSON.stringify(eightPuzzle.estadoFinal)) {
        let eightPuzzleComCustoAdicionado;
        //PRODUZ OS NODOS FILHOS
        let nodos = produzNodosFilhos(eightPuzzle);

        for ( let nodo of nodos['filhos']) {

            eightPuzzleComCustoAdicionado = adicionarCusto(nodo, eightPuzzle);
            if(JSON.stringify(eightPuzzleComCustoAdicionado.estado) === JSON.stringify(eightPuzzleComCustoAdicionado.estadoFinal)) {
                const result = eightPuzzle.nodosVisitados + ' nodos visitados. \n' + eightPuzzle.estado + ' estado após ultimo nodo visitado.\n\n' + eightPuzzle.caminho + ' caminho percorrido. \n';
                return result;
            }
        }
        eightPuzzleComCustoAdicionado.setNodoAvo(nodos['pai']);
        novoEstadoAberto(eightPuzzleComCustoAdicionado.getAbertos()[0], eightPuzzleComCustoAdicionado)
/*         for ( let nodo of nodos['filhos']) {
            //FAZER AQUI NODO AVÔ setNodoAvo
        } */
        //custoUniforme(eightPuzzleComCustoAdicionado);
    }
    return eightPuzzle.nodosVisitados + ' nodos visitados. \n' + eightPuzzle.estado + ' estado após ultimo nodo visitado.\n' + eightPuzzle.estadoFinal + ' estado final.' + '\n' + eightPuzzle.caminho + ' caminho percorrido. \n';
}

function estadoVisitado(nodo, eightPuzzle) {
    let estadoTemporario = JSON.parse(JSON.stringify(eightPuzzle.estado));
    let pecaMovimentada = eightPuzzle.estado[nodo[0]][nodo[1]];
    estadoTemporario[nodo[0]][nodo[1]] = 0;
    const tuplaDoZero = eightPuzzle.getTuplaPosicaoZero()
    estadoTemporario[tuplaDoZero[0]][tuplaDoZero[1]] = pecaMovimentada;
    return estadoTemporario;
}

function novoEstadoAberto(nodo, eightPuzzle) {
    const novoEstadoAberto = estadoVisitado(nodo, eightPuzzle);
    eightPuzzle.estado = novoEstadoAberto;
    eightPuzzle.calculaTuplaPosicaoZero();
    console.log(eightPuzzle.estado);
    return custoUniforme(eightPuzzle)
}
function adicionarCusto(nodo, eightPuzzle) {
    //SE NÃO FOR IGUAL, INCREMENTA O NÚMERO DE NODOS VISITADOS
    eightPuzzle.nodosVisitados += 1;
    //ADICIONA O CAMINHO PERCORRIDO
    eightPuzzle.caminho += nodo + ' -> ';
    const estadoTemporario = estadoVisitado(nodo, eightPuzzle);
/*     //ATUALIZA A TUPLE DA POSIÇÃO ZERO
    eightPuzzle.setTuplaPosicaoZero(nodo);
    console.log(eightPuzzle.tuplaPosicaoZero) */
    //VERIFICA SE O ESTADO É IGUAL AO ESTADO FINAL
    console.log(estadoTemporario)
    if (JSON.stringify(estadoTemporario) === JSON.stringify(eightPuzzle.estadoFinal)) {
        console.log('Estado final alcançado!');
        eightPuzzle.estado = estadoTemporario;
        console.log(eightPuzzle.estado);
        return eightPuzzle;
    }

    return eightPuzzle;
}

function produzNodosFilhos(eightPuzzle) {
    let nodos = {
        'pai': [],
        'filhos': []
    }
    //let caminhos = [];
    let tuplaPosicaoZero = eightPuzzle.calculaTuplaPosicaoZero();

    //incrementando linha para ver se da pra mudar:
    let linhaDaTupla = tuplaPosicaoZero[0];
    let colunaDaTupla = tuplaPosicaoZero[1];
    linhaDaTupla;
    nodos['pai'].push(linhaDaTupla,colunaDaTupla);
    /* eightPuzzle.setAbertos(nodos['pai']); */
    console.log( eightPuzzle.getAbertos())
    let nodoAvo = eightPuzzle.getNodoAvo();
    console.log('nodo avo: ' + nodoAvo)
    if (linhaDaTupla + 1 < 3 && JSON.stringify(nodoAvo) !== JSON.stringify([linhaDaTupla + 1,colunaDaTupla ])  ) {
        nodos['filhos'].push( [linhaDaTupla + 1,colunaDaTupla ]);
        eightPuzzle.setAbertos([linhaDaTupla + 1,colunaDaTupla])
    }
    if (linhaDaTupla - 1 >= 0 && JSON.stringify(nodoAvo) !== JSON.stringify([linhaDaTupla - 1,colunaDaTupla ])) {
        nodos['filhos'].push([linhaDaTupla - 1,colunaDaTupla ]);
        eightPuzzle.setAbertos([linhaDaTupla - 1,colunaDaTupla])
    }
    if (colunaDaTupla + 1 < 3 && JSON.stringify(nodoAvo) !== JSON.stringify([linhaDaTupla,colunaDaTupla + 1])) {
        nodos['filhos'].push([linhaDaTupla,colunaDaTupla + 1]);
        eightPuzzle.setAbertos([linhaDaTupla,colunaDaTupla + 1])
    }
    if (colunaDaTupla - 1 >= 0 && JSON.stringify(nodoAvo) !==JSON.stringify([linhaDaTupla,colunaDaTupla - 1])) {
        nodos['filhos'].push([linhaDaTupla,colunaDaTupla - 1]);
        eightPuzzle.setAbertos([linhaDaTupla,colunaDaTupla - 1])
    }

    eightPuzzle.setVisitados(tuplaPosicaoZero);
    eightPuzzle.getAbertos().shift();
    console.log('visitados: ')
    console.log(eightPuzzle.getVisitados())
    console.log('abertos: ')
    console.log(eightPuzzle.getAbertos())

    console.log(nodos);
    return nodos;
}
