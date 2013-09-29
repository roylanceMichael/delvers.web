function Game() {
	this.players = [];
	this.currentPlayer = 0;
	this.started = false;
	this.currentAction = "";
};

Game.prototype = {
	addPlayer: function(player) {
		this.players.push(player);
	},

	getPlayers: function() {
		return this.players;
	},

	startGame: function() {
		// we require unique names for all
		var nameHolder = { };
		for(var i = 0; i < this.players.length; i++) {
			
			if(nameHolder[this.players[i].name] != undefined) {
				return;
			}

			nameHolder[this.players[i].name] = 0;
		}

		if(this.players.length > 1) {
			this.started = true;
			this.currentPlayer = 0;
			this.currentAction = this.actions()[0];
		}
	},

	isStarted: function() {
		return this.started;
	},

	actions: function() {
		return [ "discard", "draw", "move", "act", "cleanup" ];
	},

	currentAction: this.currentAction,

	currentTurn: function() {
		if(this.started == false) {
			return null;
		}

		var currentPlayerName = this.players[this.currentPlayer].name;

		return new CurrentTurn(currentPlayerName, this.currentAction);
	},

	/* functions around discarding */

	discardTurn: function(discardParameters) {
		if(discardParameters == null) {
			return;
		}

		
	},

	takeTurn: function() {
		this.currentPlayer = ++this.currentPlayer % this.players.length;
	}
};