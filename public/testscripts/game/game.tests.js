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

test("game doesn't start when names aren't unique", function() {
	var game = new Game();
	var warrior = new Warrior();
	var monster1 = new Monster();
	var monster2 = new Monster();
	game.addPlayer(monster1);
	game.addPlayer(monster2);
	game.addPlayer(warrior);
	game.startGame();

	ok(game.isStarted() == false, "game should have started");
});

test("game start", function() {
	var game = buildGameWithOneWarriorOneMonster();
	game.startGame();
	ok(game.isStarted() == true, "game should have started");
});

test("game cannot start when less than 2 players", function() {
	var game = new Game();
	game.startGame();
	ok(game.isStarted() == false, "game should not have started");
});

test("game current turn returns null when not started", function() {
	var game = buildGameWithOneWarriorOneMonster();
	ok(game.currentTurn() == null, "game should have returned null because it is not started");
});