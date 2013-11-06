// to take a turn, one must discard, draw, move, attack and cleanup
// clean up localutils whenever
function LocalUtils() {
	this.gameActions = new GameActions();
};

var localUtils = new LocalUtils();

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

test("initial player starts with an action of ''", function() {
	var game = testUtils.buildGameAndStart();

	var expectedTurn = new CurrentTurn(game.getPlayers()[0].name, "");
	var actualTurn = game.getCurrentTurn();

	strictEqual(actualTurn.playerName, expectedTurn.playerName, "should have been the first players turn");
	strictEqual(actualTurn.currentAction, expectedTurn.currentAction, "should have been the first players turn");
});

test("game discards one card from player's hand when parameters contain one card", function() {
	var game = testUtils.buildGameAndStart();
	var warrior = game.getPlayers()[0];

	var discardCards = [ warrior.getCardsInHand()[0] ];

	strictEqual(5, warrior.getCardsInHand().length);

	var currentTurn = new CurrentTurn(warrior.name, localUtils.gameActions.discard);
	var actionParameters = new ActionParameters(currentTurn, discardCards);

	// discard
	var error = game.discard(actionParameters);
	strictEqual(error, "", error);

	var cardsInHand = warrior.getCardsInHand();
	strictEqual(cardsInHand.length, 4, cardsInHand.length);
});

test("game discards one card from players hand when parameters contain two of the same cards", function() {
	var game = testUtils.buildGameAndStart();
	var warrior = game.getPlayers()[0];

	var discardCards = [ warrior.getCardsInHand()[0], warrior.getCardsInHand()[0] ];

	strictEqual(5, warrior.getCardsInHand().length);

	var currentTurn = new CurrentTurn(warrior.name, localUtils.gameActions.discard);
	var actionParameters = new ActionParameters(currentTurn, discardCards);

	// discard
	game.discard(actionParameters);

	var cardsInHand = warrior.getCardsInHand();
	strictEqual(cardsInHand.length, 4, cardsInHand.length);
});

test("game draws one card from player's hand when the player has 4 cards", function() {
	var game = testUtils.buildGameAndStart();
	var warrior = game.getPlayers()[0];

	warrior.discardCard(warrior.getCardsInHand()[0]);

	strictEqual(4, warrior.getCardsInHand().length);

	game.skipAction();

	var currentTurn = new CurrentTurn(warrior.name, localUtils.gameActions.draw);
	var actionParameters = new ActionParameters(currentTurn);

	// draw
	var error = game.draw(actionParameters);

	ok(error.length == 0, error);
	var cardsInHand = warrior.getCardsInHand();
	strictEqual(cardsInHand.length, 5, cardsInHand.length);
});

test("game accepts card usage action from player", function() {
	// arrange
	var game = testUtils.buildGameAndStart();
	var warrior = game.getPlayers()[0];
	var monster = game.getPlayers()[1];

	var monsterOldHp = monster.hp;

	// discard
	var currentTurn = new CurrentTurn(warrior.name, localUtils.gameActions.discard);
	var discardParameters = new ActionParameters(currentTurn);
	
	// draw
	currentTurn = new CurrentTurn(warrior.name, localUtils.gameActions.draw);
	discardParameters = new ActionParameters(currentTurn);

	currentTurn = new CurrentTurn(warrior.name, localUtils.gameActions.attack);
	actionParameters = new ActionParameters(currentTurn, [ warrior.getCardsInHand()[0] ]);

	// act
	game.use(actionParameters);

	// assert
	var cardsInHand = warrior.getCardsInHand();
	var monsterNewHp = monster.hp;

	strictEqual(cardsInHand.length, 4, cardsInHand.length);
	ok(monsterOldHp > monsterNewHp);

});

test("game accepts cleanup action from player", function() {
	// arrange
	var game = testUtils.buildGameAndStart();
	var warrior = game.getPlayers()[0];
	var monster = game.getPlayers()[1];

	var monsterOldHp = monster.hp;

	// discard
	var currentTurn = new CurrentTurn(warrior.name, localUtils.gameActions.discard);
	var discardParameters = new ActionParameters(currentTurn);
	
	// draw
	currentTurn = new CurrentTurn(warrior.name, localUtils.gameActions.draw);
	discardParameters = new ActionParameters(currentTurn);

	currentTurn = new CurrentTurn(warrior.name, localUtils.gameActions.attack);
	actionParameters = new ActionParameters(currentTurn, [ warrior.getCardsInHand()[0] ]);

	// act
	game.use(actionParameters);

	// assert
	var cardsInHand = warrior.getCardsInHand();
	var monsterNewHp = monster.hp;

	strictEqual(cardsInHand.length, 4, cardsInHand.length);
	ok(monsterOldHp > monsterNewHp);

});