test("gameActions initial state is discard", function() {
	var gameActions = new GameActions();

	strictEqual(gameActions.getCurrentState(), gameActions.discard);
});

test("gameActions discard to draw ok", function() {
	var gameActions = new GameActions();

	var result = gameActions.acceptState(gameActions.draw);

	strictEqual(result, true);
	strictEqual(gameActions.getCurrentState(), gameActions.draw);
});

test("gameActions draw to move ok", function() {
	var gameActions = new GameActions();
	gameActions.acceptState(gameActions.draw);
	var result = gameActions.acceptState(gameActions.move);

	strictEqual(result, true);
	strictEqual(gameActions.getCurrentState(), gameActions.move);
});

test("gameActions draw to attack ok", function() {
	var gameActions = new GameActions();
	gameActions.acceptState(gameActions.draw);
	var result = gameActions.acceptState(gameActions.attack);

	strictEqual(result, true);
	strictEqual(gameActions.getCurrentState(), gameActions.attack);
});

test("gameActions move to attack ok when attack not used", function() {
	var gameActions = new GameActions();
	gameActions.acceptState(gameActions.draw);
	gameActions.acceptState(gameActions.move);

	var result = gameActions.acceptState(gameActions.attack);

	strictEqual(result, true);
	strictEqual(gameActions.getCurrentState(), gameActions.attack);
});

test("gameActions move to attack not ok when attack used", function() {
	var gameActions = new GameActions();
	gameActions.acceptState(gameActions.draw);
	gameActions.acceptState(gameActions.attack);
	gameActions.acceptState(gameActions.move);

	var result = gameActions.acceptState(gameActions.attack);

	strictEqual(result, false);
	strictEqual(gameActions.getCurrentState(), gameActions.move);
});

test("gameActions attack to cleanup ok", function() {
	var gameActions = new GameActions();
	gameActions.acceptState(gameActions.draw);
	gameActions.acceptState(gameActions.attack);

	var result = gameActions.acceptState(gameActions.cleanup);

	strictEqual(result, true);
	strictEqual(gameActions.getCurrentState(), gameActions.cleanup);
});

test("gameActions move to cleanup ok", function() {
	var gameActions = new GameActions();
	gameActions.acceptState(gameActions.draw);
	gameActions.acceptState(gameActions.move);

	var result = gameActions.acceptState(gameActions.cleanup);

	strictEqual(result, true);
	strictEqual(gameActions.getCurrentState(), gameActions.cleanup);
});