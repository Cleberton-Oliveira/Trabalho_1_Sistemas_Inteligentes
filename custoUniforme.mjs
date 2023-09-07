export default function custoUniforme(estadoInicial) {
    let possibilidadesDeMovimentos = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
    }
    let caminhos = [];
    let campoVazio = estadoInicial?.map( (linha, l ) => {
        const coluna = linha.indexOf(0);
        if (coluna > -1) {
           return [l,coluna];
        }
    });
    let tuplaPosicaoZero = campoVazio.filter( (el) => el !== undefined)[0];

    //incrementando linha para ver se da pra mudar:
    let linhaDaTupla = tuplaPosicaoZero[0];
    let colunaDaTupla = tuplaPosicaoZero[1];
    linhaDaTupla;
    if (linhaDaTupla + 1 < 3) {
        possibilidadesDeMovimentos['0'].push( [linhaDaTupla + 1,colunaDaTupla ]);
        let comquemozerotrocou = estadoInicial[linhaDaTupla + 1][colunaDaTupla]
        possibilidadesDeMovimentos[`${comquemozerotrocou}`] = [linhaDaTupla,colunaDaTupla ];
    }
    if (linhaDaTupla - 1 >= 0) {
        possibilidadesDeMovimentos['0'].push([linhaDaTupla - 1,colunaDaTupla ]);
        let comquemozerotrocou = estadoInicial[linhaDaTupla - 1][colunaDaTupla]
        possibilidadesDeMovimentos[`${comquemozerotrocou}`] = [linhaDaTupla,colunaDaTupla ];
    }
    if (colunaDaTupla + 1 < 3) {
        possibilidadesDeMovimentos['0'].push([linhaDaTupla,colunaDaTupla + 1]);
        let comquemozerotrocou = estadoInicial[linhaDaTupla][colunaDaTupla + 1]
        possibilidadesDeMovimentos[`${comquemozerotrocou}`] = [linhaDaTupla,colunaDaTupla ];
    }
    if (colunaDaTupla - 1 >= 0) {
        possibilidadesDeMovimentos['0'].push([linhaDaTupla,colunaDaTupla - 1]);
        let comquemozerotrocou = estadoInicial[linhaDaTupla][colunaDaTupla - 1]
        possibilidadesDeMovimentos[`${comquemozerotrocou}`] = [linhaDaTupla,colunaDaTupla ];
    }
    return possibilidadesDeMovimentos;
    //return  tamanhoCaminho + ' custo para o caminho.';
}
