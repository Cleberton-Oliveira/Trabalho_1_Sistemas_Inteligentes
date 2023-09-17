export default class Estado {
    constructor(estado, pai = null) {
        this.estado = estado;
        this.pai = pai;
    }
    setPai(pai) {
        this.pai = pai;
    }
    getPai() {
        return this.pai;
    }
}