Game = function () {
	this.board = [['.','.','.'],['.','.','.'],['.','.','.']],
	this.player = 'X',
	this.winner = null

	this.printBoard = () => {
		console.log(board);
		console.log(player, '\'s turn');
		this.makeMove();
	};

	this.checkWinner = () => {
		// check diagonals
		if (((board[1][1] === board[0][0] && board[1][1] === board[2][2]) ||
			(board[1][1] === board[0][2] && board[1][1] === board[2][0])) && board[1][1] !== '.') {
			this.winner = board[1][1];
		}
		for (var i = 0; i < 3; i++) {
			// check horizontals
			if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== '.') {
				this.winner = board[i][0];
			}
			// check verticals
			if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== '.') {
				this.winner = board[0][i];
			}
		}
		return this.winner;
	};

	this.makeMove = () => {
		var row = prompt('Row? (1 - 3)');
		var column = prompt('Column? (1 - 3)');
		board[row - 1][column - 1] = this.player;
		if (this.checkWinner()) {
			console.log(this.winner, ' wins!');
			var again = prompt('Play again? (y/n)');
			if (again === 'y') new Game;
			else clear;
		} else {
			this.player === 'X' ? this.player = 'O': else this.player === 'X';
			this.printBoard();
		}
	};

	this.init = () => {
		this.printBoard();
	};
};
