import custoUniforme from "./custoUniforme.mjs";
import heuristicaPrecisa from "./heuristacaPrecisa.mjs";
import heuristicaSimpes from "./heuristicaSimples.mjs";

export default class EightPuzzle {
    constructor(estadoInicial) {
        this.estadoInicial = estadoInicial;
        this.estadoFinal = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
        this.passos = 0;
    }

    resolve() {
          exile( this.estadoInicial );
    }
}


function exile( estadoInicial ) {
    console.log('');
    console.log('');
    console.log('========= Jogo 8 Puzzle ========');
    console.log('');
    console.log('Estado incial do jogo: ');
    console.log( estadoInicial );
    console.log('');
    console.log('== Resultado com custo uniforme == ');
    console.log( custoUniforme(estadoInicial) );
    console.log('');
    console.log('== Resultado com heuristica simples == ');
    console.log( heuristicaSimpes() );
    console.log('');
    console.log('== Resultado com heuristica precisa == ');
    console.log( heuristicaPrecisa() );
    console.log('');
    console.log('');

}

new EightPuzzle([[0, 2, 3], [1, 4, 6], [7, 5, 8]]).resolve();