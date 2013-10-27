function TargetHumans() {
	TargetPlayers.call(this);
}

TargetHumans.prototype = Object.create(TargetPlayers.prototype);
TargetHumans.prototype.constructor = TargetHumans;

// override 
TargetHumans.prototype.getTargetPlayer = function(player, players) {

	for(var i = 0; i < players.length; i++) {
		if(players[i] instanceof HumanPlayer) {
			return players[i];
		}
	}

	return null;
}