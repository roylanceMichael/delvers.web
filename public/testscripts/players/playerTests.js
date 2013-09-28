test("player ctor", function(){
	var player = new Player();
	ok(player != null, "cannot instantiate player!");
});

test("monster ctor", function() {
	var monster = new Monster();
	ok(monster != null, "cannot instantiate monster players!");
});

test("humanPlayer ctor", function() {
	var humanPlayer = new HumanPlayer();
	ok(humanPlayer != null, "cannot instantiate human player!");
});

test("warrior ctor", function(){
	var warrior = new Warrior();
	ok(warrior != null, "cannot instantiate warrior!");
});