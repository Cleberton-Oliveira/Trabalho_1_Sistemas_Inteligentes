import EightPuzzle from './eightPuzzle.mjs';
function resoveEightPuzzle() {
    const puzzle = new EightPuzzle([[0,2,3], [1,4,6], [7,5,8]]);
    puzzle.resolve();
}
resoveEightPuzzle();
