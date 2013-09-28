test("once player takes turn it is the other players turn", function() {
	var game = buildGameAndStart();
	strictEqual(game.currentTurn(), game.getPlayers()[0], "should have been the first players turn");
	game.takeTurn();
	strictEqual(game.currentTurn(), game.getPlayers()[1], "should have been the second players turn");
});