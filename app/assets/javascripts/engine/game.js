function Game() {
	this.players = [];
	this.currentPlayer = 0;
	this.started = false;
};

Game.prototype = {
	addPlayer: function(player) {
		this.players.push(player);
	},

	getPlayers: function() {
		return this.players;
	},

	startGame: function() {
		if(this.players.length > 1) {
			this.started = true;
			this.currentPlayer = 0;
		}
	},

	isStarted: function() {
		return this.started;
	},

	currentTurn: function() {
		if(this.started == false) {
			return null;
		}
		return this.players[this.currentPlayer];
	},

	takeTurn: function() {
		this.currentPlayer = ++this.currentPlayer % this.players.length;
	}
};