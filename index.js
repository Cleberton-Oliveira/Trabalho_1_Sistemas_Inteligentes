import { EightPuzzle } from './eight-puzzle.js';
function resoveEightPuzzle() {
    var puzzle = new EightPuzzle();
    var result = puzzle.solve();
    console.log(result);
}