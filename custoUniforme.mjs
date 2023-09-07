let i = 0
export default function custoUniforme(eightPuzzle) {
    i++
    if (i > 1000) {
        return 'Não foi possível encontrar o estado final.';
    }
    //IF ESTADO É IGUAL AO ESTADO FINAL
    if (eightPuzzle.toString(eightPuzzle.estado) !== eightPuzzle.toString(eightPuzzle.estadoFinal)) {
        let eightPuzzleComCustoAdicionado;
        //PRODUZ OS NODOS FILHOS
        let nodosFilhos = produzNodosFilhos(eightPuzzle);

         for ( let nodo of nodosFilhos) {

            eightPuzzleComCustoAdicionado = adicionarCusto(nodo, eightPuzzle);
            if(JSON.stringify(eightPuzzleComCustoAdicionado.estado) === JSON.stringify(eightPuzzleComCustoAdicionado.estadoFinal)) {
                return eightPuzzle.nodosVisitados + ' nodos visitados. \n' + eightPuzzle.estado + ' estado após ultimo nodo visitado.\n' + '\n' + eightPuzzle.caminho + ' caminho percorrido. \n';
            }
        }
        //custoUniforme(eightPuzzleComCustoAdicionado);
    }
    return eightPuzzle.nodosVisitados + ' nodos visitados. \n' + eightPuzzle.estado + ' estado após ultimo nodo visitado.\n' + eightPuzzle.estadoFinal + ' estado final.' + '\n' + eightPuzzle.caminho + ' caminho percorrido. \n';
}

function adicionarCusto(nodo, eightPuzzle) {
    //SE NÃO FOR IGUAL, INCREMENTA O NÚMERO DE NODOS VISITADOS
    eightPuzzle.nodosVisitados += 1;
    //ADICIONA O CAMINHO PERCORRIDO
    eightPuzzle.caminho += nodo + ' -> ';
    //PEGA A PEÇA QUE VAI SER MOVIMENTADA
    let pecaMovimentada = eightPuzzle.estado[nodo[0]][nodo[1]];
    let estadoTemporario = JSON.parse(JSON.stringify(eightPuzzle.estado));
    //MOVIMENTA A PEÇA
    estadoTemporario[nodo[0]][nodo[1]] = 0;
    //MOVIMENTA A PEÇA VAZIA
    const tuplaDoZero = eightPuzzle.getTuplaPosicaoZero()
    estadoTemporario[tuplaDoZero[0]][tuplaDoZero[1]] = pecaMovimentada;
/*     //ATUALIZA A TUPLE DA POSIÇÃO ZERO
    eightPuzzle.setTuplaPosicaoZero(nodo);
    console.log(eightPuzzle.tuplaPosicaoZero) */
    //VERIFICA SE O ESTADO É IGUAL AO ESTADO FINAL
    if (JSON.stringify(estadoTemporario) === JSON.stringify(eightPuzzle.estadoFinal)) {
        console.log('Estado final alcançado!');
        eightPuzzle.estado = estadoTemporario;
        console.log(eightPuzzle.estado);
        return eightPuzzle;
    }
    console.log(eightPuzzle.estado)
    return eightPuzzle;
}

function produzNodosFilhos(eightPuzzle) {
    let nodos = {
        'pai': [],
        'filho': []
    }
    //let caminhos = [];
    let tuplaPosicaoZero = eightPuzzle.calculaTuplaPosicaoZero();

    //incrementando linha para ver se da pra mudar:
    let linhaDaTupla = tuplaPosicaoZero[0];
    let colunaDaTupla = tuplaPosicaoZero[1];
    linhaDaTupla;
    nodos['pai'].push([linhaDaTupla,colunaDaTupla ]);
    if (linhaDaTupla + 1 < 3) {
        nodos['filho'].push( [linhaDaTupla + 1,colunaDaTupla ]);
    }
    if (linhaDaTupla - 1 >= 0) {
        nodos['filho'].push([linhaDaTupla - 1,colunaDaTupla ]);
    }
    if (colunaDaTupla + 1 < 3) {
        nodos['filho'].push([linhaDaTupla,colunaDaTupla + 1]);
    }
    if (colunaDaTupla - 1 >= 0) {
        nodos['filho'].push([linhaDaTupla,colunaDaTupla - 1]);
    }
    console.log(nodos);
    return nodos['filho'];
}
