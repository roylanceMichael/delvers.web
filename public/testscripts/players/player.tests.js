var name = "mike";

test("player ctor", function(){
	var player = new Player(name);
	
	ok(player != null, "cannot instantiate player!");
	ok(player.getName() == name);
	ok(player instanceof Player);
});

test("monster ctor", function() {
	var monster = new Monster(name);
	ok(monster != null, "cannot instantiate monster players!");
	ok(monster.getName() == name);
	ok(monster instanceof Player);
});

test("humanPlayer ctor", function() {
	var humanPlayer = new HumanPlayer(name);
	ok(humanPlayer != null, "cannot instantiate human player!");
	ok(humanPlayer.getName() == name);
	ok(humanPlayer instanceof Player);
});

test("warrior ctor", function(){
	var warrior = new Warrior(name);
	ok(warrior != null, "cannot instantiate warrior!");
	ok(warrior.getName() == name);
	ok(warrior instanceof Player);
});

test("humanPlayer can get determined card", function() {
	var humanPlayer = new HumanPlayer(name);

	var generateCards = new GenerateCards();
	generateCards.generateCardsForPlayer(humanPlayer, [humanPlayer]);

	var cardToUse = humanPlayer.determineCardToUse();

	strictEqual(humanPlayer.cardsInHand[0], cardToUse);
	strictEqual(humanPlayer.getCardCount(), 50);
});

test("humanPlayer returns cards in hand", function() {
	var humanPlayer = new HumanPlayer(name);

	var generateCards = new GenerateCards();
	generateCards.generateCardsForPlayer(humanPlayer, [humanPlayer]);

	var cardsInHand = humanPlayer.getCardsInHand();

	strictEqual(5, cardsInHand.length);
	strictEqual(humanPlayer.getCardCount(), 50);
});

test("humanPlayer uses card in hand", function() {
	var humanPlayer = new HumanPlayer(name);
	var monster = new Monster("jeff");
	var oldMonsterHp = monster.hp;

	var generateCards = new GenerateCards();
	generateCards.generateCardsForPlayer(humanPlayer, [humanPlayer, monster]);

	var cardToUse = humanPlayer.determineCardToUse();

	humanPlayer.useCard(cardToUse);

	strictEqual(humanPlayer.getCardsInHand().length, 4);
	strictEqual(humanPlayer.getCardCount(), 50);
	ok(oldMonsterHp > monster.hp, monster.hp);
});

test("monster uses card in hand", function() {
	var humanPlayer = new HumanPlayer(name);
	var monster = new Monster("jeff");
	var oldHumanHp = humanPlayer.hp;

	var generateCards = new GenerateCards();
	var players = [humanPlayer, monster];
	generateCards.generateCardsForPlayer(humanPlayer, players);
	generateCards.generateCardsForPlayer(monster, players);

	var cardToUse = monster.determineCardToUse();

	monster.useCard(cardToUse);

	strictEqual(monster.getCardsInHand().length, 4);
	strictEqual(monster.getCardCount(), 50);
	ok(oldHumanHp > humanPlayer.hp, humanPlayer.hp);
});