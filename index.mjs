import EightPuzzle from './eightPuzzle.mjs';
function resoveEightPuzzle() {
    var puzzle = new EightPuzzle([[1,3,2], [4,5,6], [7,8,0]	]);
    var result = puzzle.resolve();
    console.log(result);
}
resoveEightPuzzle();