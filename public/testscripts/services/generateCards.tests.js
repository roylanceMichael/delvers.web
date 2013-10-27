test("generateCards ctor", function() {
	var generateCards = new GenerateCards();

	ok(generateCards != null);
});

test("generateCards generates 50 cards for monster", function() {
	var generateCards = new GenerateCards();

	var human = new HumanPlayer("mike");
	var monster = new Monster("jeff");

	generateCards.generateCardsForPlayer(monster, [human, monster]);

	ok(human.getCardCount() == 0);
	ok(monster.getCardCount() == 50);
});

test("generateCards generates 50 cards for human", function() {
	var generateCards = new GenerateCards();

	var human = new HumanPlayer("mike");
	var monster = new Monster("jeff");

	generateCards.generateCardsForPlayer(human, [human, monster]);

	ok(monster.getCardCount() == 0);
	ok(human.getCardCount() == 50);
});