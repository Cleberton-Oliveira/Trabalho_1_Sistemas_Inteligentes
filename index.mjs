import EightPuzzle from './eightPuzzle.mjs';
function resoveEightPuzzle() {
    const puzzle = new EightPuzzle([[1, 2, 3], [4, 5, 6], [0, 7, 8]]);
    puzzle.resolve();
}
resoveEightPuzzle();
