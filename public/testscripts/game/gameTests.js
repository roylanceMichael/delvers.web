test("game ctor", function() {
	var game = new Game();
	ok(game != null, "game was null!");
});

test("game accepts 1 player", function () {
	var game = new Game();
	var player = new Player();
	game.addPlayer(player);
	ok(game.getPlayers().length == 1, "should have had 1 player!");
});

test("game accepts 2 players", function () {
	var game = new Game();
	var warrior = new Warrior();
	var player = new Player();
	game.addPlayer(player);
	game.addPlayer(warrior);
	ok(game.getPlayers().length == 2, "should have had 2 players");
});

test("game accepts 3 players", function () {
	var game = new Game();
	var warrior = new Warrior();
	var monster1 = new Monster();
	var monster2 = new Monster();
	game.addPlayer(monster1);
	game.addPlayer(monster2);
	game.addPlayer(warrior);
	ok(game.getPlayers().length == 3, "should have had 3 players");
});