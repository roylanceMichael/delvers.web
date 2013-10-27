function AttackCard(performingPlayer, gameBoard, targetRules, attackAmount) {
	this.performingPlayer = performingPlayer;
	this.gameBoard = gameBoard;
	this.targetRules = targetRules;
	this.attackAmount = attackAmount;
}

AttackCard.prototype = {
	Use: function() {
		
	}
};