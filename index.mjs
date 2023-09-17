import EightPuzzle from './eightPuzzle.mjs';
import { custoUniforme } from "./custoUniforme.mjs";
import heuristicaPrecisa from "./heuristacaPrecisa.mjs";
import { heuristicaSimples } from "./heuristicaSimples.mjs";
import  {performance} from 'perf_hooks';
const resoveEightPuzzle = (inicio) => {
    console.log('');
    console.log('========= Jogo 8 Puzzle ========');
    console.log('== Resultado com custo uniforme == ');
    let start = performance.now();
    console.log( custoUniforme(new EightPuzzle(inicio)));
    let end = performance.now();
    let result = (end - start) / 1000;
    console.log('Tempo de execução: ' + (result) + ' segundos \n');


    console.log('== Resultado com heuristica simples == ');
    start = performance.now();
    console.log( heuristicaSimples(new EightPuzzle(inicio)));
    end = performance.now();
    result = (end - start) / 1000;
    console.log('Tempo de execução: ' + (result) + ' segundos \n');

    console.log('== Resultado com heuristica precisa == ');
    console.log( heuristicaPrecisa(new EightPuzzle(inicio)) );

}

resoveEightPuzzle([
    [1, 2, 3],
    [4, 0, 6],
    [7, 5, 8]
]);
