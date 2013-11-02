// to take a turn, one must discard, draw, move, attack and cleanup
test("actionParameter has access to player's name", function() {
	var currentTurn = new CurrentTurn("mike", "discard");
	var actionParameter = new ActionParameters(currentTurn);

	strictEqual(actionParameter.getPlayerName(), currentTurn.playerName);
});

test("actionParameter has access to current action", function() {
	var currentTurn = new CurrentTurn("mike", "discard");
	var actionParameter = new ActionParameters(currentTurn);

	strictEqual(actionParameter.getCurrentAction(), currentTurn.currentAction);
});

test("initial player starts with an action of discard", function() {
	var game = testUtils.buildGameAndStart();

	var expectedTurn = new CurrentTurn(game.getPlayers()[0].name, "discard");
	var actualTurn = game.getCurrentTurn();

	strictEqual(actualTurn.playerName, expectedTurn.playerName, "should have been the first players turn");
	strictEqual(actualTurn.currentAction, expectedTurn.currentAction, "should have been the first players turn");
});

test("game sends error when discarding when not expecting a discard action", function() {
	var game = testUtils.buildGameAndStart();
	var warrior = game.getPlayers()[0];

	var discardCards = [ warrior.getCardsInHand()[0] ];

	strictEqual(5, warrior.getCardsInHand().length);

	var currentTurn = game.getCurrentTurn();
	var actionParameters = new ActionParameters(currentTurn, discardCards);

	// discard
	game.discard(actionParameters);

	var cardsInHand = warrior.getCardsInHand();
	strictEqual(cardsInHand.length, 4, cardsInHand.length);
});