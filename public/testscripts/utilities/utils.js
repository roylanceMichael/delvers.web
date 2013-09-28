/* helper functions */
var buildGameWithOneWarriorOneMonster = function() {
	var game = new Game();
	var warrior = new Warrior();
	var monster = new Monster();
	game.addPlayer(warrior);
	game.addPlayer(monster);
	return game;
};

var buildGameAndStart = function() {
	var game = buildGameWithOneWarriorOneMonster();
	game.startGame();
	return game;
};