/* helper functions */
function UtilitiesTest() {
	// let's just load in the character sheet object 
	// and make sure we can work with it
	this.characters = new Characters();

	// and the uiDrawing
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");
	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	uiDrawing.initCanvas();
	this.uiDrawing = uiDrawing; 
}

UtilitiesTest.prototype = {
	buildGameWithOneWarriorOneMonster: function() {
		var game = new Game();
		var warrior = new Warrior("Jeff");
		var monster = new Monster("Mike");
		game.addPlayer(warrior);
		game.addPlayer(monster);
		return game;
	},

	buildGameAndStart: function() {
		var game = this.buildGameWithOneWarriorOneMonster();
		game.startGame();
		return game;
	}
};