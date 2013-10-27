test("targetPlayers ctor", function() {
	var targetPlayers = new TargetPlayers();

	ok(targetPlayers != null);
});

test("targetHumans ctor", function() {
	var targetHumans = new TargetHumans();

	ok(targetHumans != null);
});

test("targetHumans getTargetPlayer returns a Human Player", function() {
	var targetHumans = new TargetHumans();

	var monster = new Monster("mike");
	var human = new HumanPlayer("jeff");

	var foundPlayer = targetHumans.getTargetPlayer(monster, [monster, human]);

	ok(foundPlayer != null);
	ok(foundPlayer instanceof HumanPlayer);
	ok(foundPlayer == human);
});

test("targetMonsters getTargetPlayer returns a Monster Player", function() {
	var targetMonsters = new TargetMonsters();

	var monster = new Monster("mike");
	var human = new HumanPlayer("jeff");

	var foundPlayer = targetMonsters.getTargetPlayer(monster, [monster, human]);

	ok(foundPlayer != null);
	ok(foundPlayer instanceof Monster);
	ok(foundPlayer == monster);
});