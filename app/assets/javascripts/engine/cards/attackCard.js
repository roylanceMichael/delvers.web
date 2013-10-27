function AttackCard(player, players, playerTargeter, generateDamage) {
	this.player = player;
	this.players = players;
	this.playerTargeter = playerTargeter;
	this.generateDamage = generateDamage;
}

AttackCard.prototype = {
	use: function() {
		var playerToTarget = this.playerTargeter.getTargetPlayer(this.player, this.players);
		var damageAmount = this.generateDamage.getDamage();
		playerToTarget.takeDamage(damageAmount);
	}
};