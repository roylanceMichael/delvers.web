test("AttackCard ctor", function() {
	var targetMonsters = new TargetMonsters();
	var generateDamage = new GenerateDamage(3);

	var monster = new Monster("mike");
	var human = new HumanPlayer("jeff");

	var attackCard = new AttackCard(human, [human, monster], targetMonsters, generateDamage);

	ok(attackCard != null);
});

test("AttackCard use", function() {
	var targetMonsters = new TargetMonsters();
	var generateDamage = new GenerateDamage(4);

	var monster = new Monster("mike");
	var human = new HumanPlayer("jeff");

	var oldHp = monster.hp;

	var attackCard = new AttackCard(human, [human, monster], targetMonsters, generateDamage);
	attackCard.use();

	ok(oldHp > monster.hp, oldHp + " " + monster.hp);
});

test("AttackCard use doesn't go below 0 health", function() {
	var targetMonsters = new TargetMonsters();
	var generateDamage = new GenerateDamage(40);

	var monster = new Monster("mike");
	var human = new HumanPlayer("jeff");

	var attackCard = new AttackCard(human, [human, monster], targetMonsters, generateDamage);
	attackCard.use();

	ok(0 == monster.hp);
});