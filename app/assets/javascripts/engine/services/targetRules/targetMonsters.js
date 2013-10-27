function TargetMonsters() {

}

TargetMonsters.prototype = Object.create(TargetPlayers.prototype);
TargetMonsters.prototype.constructor = TargetMonsters;

// override 
TargetMonsters.prototype.getTargetPlayer = function(player, players) {

	for(var i = 0; i < players.length; i++) {
		if(players[i] instanceof Monster) {
			return players[i];
		}
	}

	return null;
}