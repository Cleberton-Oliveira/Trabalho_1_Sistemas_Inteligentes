import EightPuzzle from './eightPuzzle.mjs';
function resoveEightPuzzle() {
    const puzzle = new EightPuzzle([[1, 2, 3], [4, 0, 5], [7, 8, 6]]);
    puzzle.resolve();
}
resoveEightPuzzle();
