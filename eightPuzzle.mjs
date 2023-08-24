export default class EightPuzzle {
    constructor(estadoInicial) {
        this.estadoInicial = estadoInicial;
        this.estadoFinal = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
    }

    resolve() {
        return  this.estadoInicial
    }
}