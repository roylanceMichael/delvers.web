function CurrentTurn(playerName, currentAction) {
	this.playerName = playerName;
	this.currentAction = currentAction;
}

CurrentTurn.prototype = {
	playerName: this.playerName,
	currentAction: this.currentAction
};