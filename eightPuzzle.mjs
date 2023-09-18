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

    setAbertos(aberto, reordenar = false, reordenarHeuristicaComplexa = false) {
        this.abertos.push(aberto);
        //-----------------heuristica simples-----------------
        if (reordenar) {
            this.abertos.sort( (a,b) => a.custo - b.custo);
            return;
        }
        //----------------------------------------------------
        //-----------------heuristica precisa-----------------
        if (reordenarHeuristicaComplexa) {
            this.abertos.sort( (a,b) => a.custoMelhorHeuristica - b.custoMelhorHeuristica);
            return;
        }
        //----------------------------------------------------
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
}

