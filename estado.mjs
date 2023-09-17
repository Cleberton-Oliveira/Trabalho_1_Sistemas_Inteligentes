export default class Estado {
    constructor(estado, pai = null) {
        this.estado = estado;
        this.pai = pai;
        this.custo = 0;
        this.estadoFinal = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
        this.nivel = 0;
    }
    setPai(pai) {
        this.pai = pai;
    }
    getPai() {
        return this.pai;
    }
    setCusto(g) {
        const f = g + 9 - this.qtdPecasNoLugar();
        this.custo = f;
    }
    getCusto() {
        return this.custo;
    }
    qtdPecasNoLugar() {
        const r = this.estado.reduce( (acc, linha, l) => {
            acc += linha.reduce( (acc, coluna, c) => {
                if (coluna === this.estadoFinal[l][c]) {
                    acc++;
                }
                return acc;
            }, 0);
            return acc;
        }, 0);
        return r;
    }
    setNivel(nivel) {
        this.nivel = nivel;
    }

}