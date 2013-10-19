// to take a turn, one must discard, draw, move, attack and cleanup
test("initial player starts with an action of discard", function() {
	var game = testUtils.buildGameAndStart();

	var expectedTurn = new CurrentTurn(game.getPlayers()[0].name, "discard");
	var actualTurn = game.currentTurn();

	strictEqual(actualTurn.playerName, expectedTurn.playerName, "should have been the first players turn");
	strictEqual(actualTurn.currentAction, expectedTurn.currentAction, "should have been the first players turn");
});