function Game() {
	this.actions = [ "discard", "draw", "move", "act", "cleanup" ];
	this.currentAction = "";
	this.currentPlayer = 0;
	this.players = [];
	this.started = false;
};

Game.prototype = {
	addPlayer: function(player) {
		this.players.push(player);
	},

	getPlayers: function() {
		return this.players;
	},

	canStartGame: function() {
		var nameHolder = { };
		for(var i = 0; i < this.players.length; i++) {
			
			if(nameHolder[this.players[i].name] != undefined) {
				return false;
			}

			nameHolder[this.players[i].name] = 0;
		}

		return this.players.length > 1;
	},

	startGame: function() {
		if(this.canStartGame()) {
			this.started = true;
			this.currentPlayer = 0;
			this.currentAction = this.actions[0];
		}
	},

	isStarted: function() {
		return this.started;
	},

	getCurrentTurn: function() {
		if(this.started == false) {
			return null;
		}

		var currentPlayerName = this.players[this.currentPlayer].name;

		return new CurrentTurn(currentPlayerName, this.currentAction);
	},

	/* functions around discarding */

	discard: function(discardParameters) {
		if(discardParameters == null) {
			return "parameters empty";
		}

		if(this.currentAction != this.actions[0]) {
			return "current action not discard";
		}

		var player = this.players[this.currentPlayer];

		if(player == null) {
			return "error getting current player";
		}
	},

	// draw turn
	// move turn
	// action turn
	// cleanup turn

	takeTurn: function() {
		// cycle through each of the 
		this.currentPlayer = ++this.currentPlayer % this.players.length;
	}
};