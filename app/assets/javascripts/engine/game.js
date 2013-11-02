function Game() {
	this.notStartedErrorMessage = "game not started";
	this.parametersEmptyErrorMessage = "parameters empty";
	this.wrongActionSentErrorMessage = "wrong action";
	this.playerNotFound = "player not found";

	this.actions = gameActions.actions;
	this.currentActionIdx = 0;
	this.currentPlayerIdx = 0;
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

			// generate cards for all players
			var players = this.getPlayers();

			// hard coding this dependency for now, should inject in the future
			var generateCards = new GenerateCards();

			for(var i = 0; i < players.length; i++) {
				generateCards.generateCardsForPlayer(players[i], players);
			}

			this.started = true;
			this.currentPlayerIdx = 0;
			this.currentActionIdx = 0;
		}
	},

	isStarted: function() {
		return this.started;
	},

	getCurrentTurn: function() {
		if(this.started == false) {
			return null;
		}

		var currentPlayerName = this.players[this.currentPlayerIdx].name;
		var currentAction = this.actions[this.currentActionIdx];

		return new CurrentTurn(currentPlayerName, currentAction);
	},

	/* functions around discarding */

	// returns an error message if actionParameters aren't valid
	validateAction: function(actionParameters) {
		if(!this.isStarted()) {
			return this.notStartedErrorMessage;
		}

		if(actionParameters == null) {
			return this.parametersEmptyErrorMessage;
		}

		if(this.actions[this.currentActionIdx] != actionParameters.getCurrentAction()) {
			return this.wrongActionSentErrorMessage;
		}

		// we do this so we get the current index of the player
		var player = this.players[this.currentPlayer];

		if(this.players[this.currentPlayerIdx].name != actionParameters.getPlayerName()) {
			return this.playerNotFound;
		}

		return "";
	},

	// draw turn
	discard: function(actionParameters) {
		var errorMessage = this.validateAction(actionParameters);
		
		if(errorMessage.length > 0) {
			return errorMessage;
		}

		var player = this.players[this.currentPlayerIdx];

		// what if we had it built in that actionParameters knew what to do?
		for(var i = 0; i < actionParameters.parameters.length; i++) {
			player.discardCard(actionParameters.parameters[i]);
		}

		return "";
	},

	// move turn
	// action turn
	// cleanup turn
	takeTurn: function() {
		// cycle through each of the 
		this.currentPlayerIdx = ++this.currentPlayerIdx % this.players.length;
	}
};