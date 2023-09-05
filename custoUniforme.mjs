export default function custoUniforme(estadoInicial) {
    const tamanhoCaminho = 0;
    let [ linhaCampoVazio, colunaCampoVazio ] = estadoInicial?.map( ( linha, l ) => {
        const coluna = linha.indexOf(0);
        if (coluna > -1) {
            return [l, coluna];
        }
    });
    if (linhaCampoVazio === 0 && colunaCampoVazio === 0 || linhaCampoVazio === 0 && colunaCampoVazio === 2 || linhaCampoVazio === 2 && colunaCampoVazio === 0 || linhaCampoVazio === 2 && colunaCampoVazio === 2) {
        //caso com 2 possibilidades de movimento
        return tamanhoCaminho + ' custo para o caminho.';
    } else if ( linhaCampoVazio === 1 && colunaCampoVazio === 0 || linhaCampoVazio === 0 && colunaCampoVazio === 1 || linhaCampoVazio === 1 && colunaCampoVazio === 2 || linhaCampoVazio === 2 && colunaCampoVazio === 1 ) {
        //caso com 3 possibilidades de movimento
        return tamanhoCaminho + ' custo para o caminho.';
    } else if ( linhaCampoVazio === 1 && colunaCampoVazio === 1 ) {
        //caso com 4 possibilidades de movimento
        return tamanhoCaminho + ' custo para o caminho.';
    }
    let estadoFinal = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
    return estadoFinal;
    //return  tamanhoCaminho + ' custo para o caminho.';
}
