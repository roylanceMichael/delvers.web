function ActionParameters(currentTurn, parameters){
	this.currentTurn = currentTurn;
	this.parameters = parameters;
}

ActionParameters.prototype = {
	getPlayerName: function() {
		return this.currentTurn.playerName;
	},

	getCurrentAction: function() {
		return this.currentTurn.currentAction;
	}
}