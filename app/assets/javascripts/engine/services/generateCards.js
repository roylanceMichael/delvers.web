function GenerateCards() {

}

GenerateCards.prototype = {
	generateCardsForPlayer: function(player, players) {
		if(player instanceof Monster) {
			this.generateCardsForMonster(player, players);
		}
		else if(player instanceof HumanPlayer) {
			this.generateCardsForHuman(player, players);
		}
	},

	generateCardsForMonster: function(monster, players) {
		for(var i = 0; i < 50; i++) {
			var attackCard = new AttackCard(monster, players, new TargetHumans(), new GenerateDamage(3));
			monster.addCard(attackCard);
		}
	},

	generateCardsForHuman: function(human, players) {
		for(var i = 0; i < 50; i++) {
			var attackCard = new AttackCard(human, players, new TargetMonsters(), new GenerateDamage(5));
			human.addCard(attackCard);
		}
	}
}