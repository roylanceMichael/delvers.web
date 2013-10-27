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