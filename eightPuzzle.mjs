import { custoUniforme } from "./custoUniforme.mjs";
import heuristicaPrecisa from "./heuristacaPrecisa.mjs";
import heuristicaSimpes from "./heuristicaSimples.mjs";
import Estado from "./estado.mjs";
export default class EightPuzzle {
    constructor(estado) {
        this.objEstado = new Estado(estado);
        this.estadoInicial = estado;
        this.estadoFinal = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
        this.tuplaPosicaoZero = this.calculaTuplaPosicaoZero();
        this.caminho = this.tuplaPosicaoZero + ' -> ';
        this.abertos = [];
        this.visitados = [];
    }

    setVisitados(visitado) {
        this.visitados.push(visitado);
    }

    getVisitados() {
        return this.visitados;
    }

    setAbertos(aberto) {
        this.abertos.push(aberto);
    }

    getAbertos() {
        return this.abertos;
    }

    getCaminho() {
        let j = 0
        let visitados = JSON.parse(JSON.stringify(this.getVisitados()));
        let ultimo = JSON.parse(JSON.stringify(visitados.pop()));
        let caminho = JSON.stringify(ultimo.estado) + ' -> ';
        while (JSON.stringify(ultimo.pai) !== JSON.stringify(this.estadoInicial)) {
            const paiEncontrado = visitados.find( (el) => JSON.stringify(el.estado) === JSON.stringify(ultimo.pai))
            if (paiEncontrado) {
                caminho += JSON.stringify(paiEncontrado.estado) + ' -> ';
                ultimo = JSON.parse(JSON.stringify(paiEncontrado));
            }
        }
        caminho += JSON.stringify(this.estadoInicial);
        return caminho;
    }

    getTuplaPosicaoZero() {
        return this.tuplaPosicaoZero;
    }
    setTuplaPosicaoZero(tuplaPosicaoZero) {
        this.tuplaPosicaoZero = tuplaPosicaoZero;
    }

    calculaTuplaPosicaoZero() {
        let campoVazio = this.objEstado.estado.map( (linha, l ) => {
            const coluna = linha.indexOf(0);
            if (coluna > -1) {
               return [l,coluna];
            }
        });
        this.tuplaPosicaoZero = campoVazio.filter( (el) => el !== undefined)[0];
        return this.tuplaPosicaoZero;
    }
    
    resolve() {
        this.exile( this.objEstado );
    }

    exile( objEstado ) {
        console.log('');
        console.log('');
        console.log('========= Jogo 8 Puzzle ========');
        console.log('');
        console.log('Estado incial do jogo: ');
        console.log( objEstado.estado );
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

