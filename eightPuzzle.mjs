import custoUniforme from "./custoUniforme.mjs";
import heuristicaPrecisa from "./heuristacaPrecisa.mjs";
import heuristicaSimpes from "./heuristicaSimples.mjs";

export default class EightPuzzle {
    constructor(estado) {
        this.estado = estado;
        this.estadoFinal = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
        this.tuplaPosicaoZero = this.calculaTuplaPosicaoZero();
        this.caminho = this.tuplaPosicaoZero + ' -> ';
        this.abertos = [];
        this.visitados = [];
    }

    setVisitados(visitados) {
        this.visitados.push(visitados);
    }

    getVisitados() {
        return this.visitados;
    }

    setAbertos(abertos) {
        this.abertos.push(abertos);
    }

    getAbertos() {
        return this.abertos;
    }

    getTuplaPosicaoZero() {
        return this.tuplaPosicaoZero;
    }
    setTuplaPosicaoZero(tuplaPosicaoZero) {
        this.tuplaPosicaoZero = tuplaPosicaoZero;
    }

    calculaTuplaPosicaoZero() {
        let campoVazio = this.estado.map( (linha, l ) => {
            const coluna = linha.indexOf(0);
            if (coluna > -1) {
               return [l,coluna];
            }
        });
        this.tuplaPosicaoZero = campoVazio.filter( (el) => el !== undefined)[0];
        return this.tuplaPosicaoZero;
    }
    resolve() {
        this.exile( this.estado );
    }

    exile( estado ) {
        console.log('');
        console.log('');
        console.log('========= Jogo 8 Puzzle ========');
        console.log('');
        console.log('Estado incial do jogo: ');
        console.log( estado );
        console.log('');
        console.log('== Resultado com custo uniforme == ');
        let start = performance.now();
        console.log( custoUniforme(this) );
        let end = performance.now();
        let result = (end - start) / 1000;
        console.log('Tempo de execução: ' + (result) + ' segundos');
        console.log('');
        console.log('== Resultado com heuristica simples == ');
        console.log( heuristicaSimpes() );
        console.log('');
        console.log('== Resultado com heuristica precisa == ');
        console.log( heuristicaPrecisa() );
        console.log('');
        console.log('');
    }
}

