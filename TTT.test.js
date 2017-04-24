var game = new Game();

console.log('game board should be blank on init: ', game.board === [['.','.','.'],['.','.','.'],['.','.','.']]);
console.log('first player should be "X": ', game.player === 'X');
console.log('there should not be a winner on init: ', game.winner !== 'X' && game.winner !== 'O');
console.log('there should be a function called "Print Board": ', game.board !== false);
