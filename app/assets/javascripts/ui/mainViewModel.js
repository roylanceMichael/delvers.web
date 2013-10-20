function MainViewModel(uiDrawing, characters) {
	this.uiDrawing = uiDrawing;
	this.characters = characters;
	this.currentPlayers = [];
	this.currentMonsters = [];
}

MainViewModel.prototype = {
	containsPlayer: function(player) {
		for(var i = 0; i < this.currentPlayers.length; i++) {
			if(this.currentPlayers[i].name == player.name) {
				return true;
			}
		}
		return false;
	},

	addPlayer: function(player) {
		var playerInGame = this.containsPlayer(player);

		if(!playerInGame) {
			// add the player in
			this.currentPlayers.push(player);
			// add a new monster in
			var monster = this.characters.monster;
			this.currentMonsters.push(monster);

			// keep trying to draw until we find an open spot
			var alreadyDrawn = false;
			for(var y = 0; y < this.uiDrawing.chunkSize; y++) {
				for(var x = 0; x < this.uiDrawing.chunkSize; x++) {
					if(this.uiDrawing.isLocationOkToDraw(x, y) && !alreadyDrawn) {
						this.uiDrawing.drawImageAssetOnGrid(player, x, y);
						alreadyDrawn = true;
					}
				}
			}

			// try to draw monster at opposite location
			// keep trying to draw until we find an open spot
			for(var y0 = this.uiDrawing.chunkSize - 1; y0 >= 0; y0--) {
				for(var x0 = this.uiDrawing.chunkSize - 1; x0 >= 0; x0--) {
					if(this.uiDrawing.isLocationOkToDraw(x0, y0)) {
						this.uiDrawing.drawImageAssetOnGrid(monster, x0, y0);
						return true;
					}
				}
			}
		}

		return false;
	},
};