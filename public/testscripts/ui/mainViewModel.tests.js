test("mainViewModel ctor", function(){
	var viewModel = new MainViewModel(testUtils.uiDrawing, testUtils.characters);

	ok(viewModel != null, "cannot instantiate mainViewModel!");
	ok(viewModel.uiDrawing != null, "did not load uiDrawing!");
});

test("mainViewModel add player to board", function(){
	var viewModel = new MainViewModel(testUtils.uiDrawing, testUtils.uiUtilities, testUtils.characters);

	// get a player
	var player = viewModel.characters.archer;

	ok(!viewModel.containsPlayer(player), "player added to board before he should be!");

	viewModel.addPlayer(player);

	ok(viewModel.containsPlayer(player), "player not added to board!");
});

test("mainViewModel cannot add player to board multiple times", function(){
	var viewModel = new MainViewModel(testUtils.uiDrawing, testUtils.uiUtilities, testUtils.characters);

	// get a player
	var player = viewModel.characters.archer;
	
	ok(!viewModel.containsPlayer(player), "player added to board before he should be!");

	viewModel.addPlayer(player);

	ok(viewModel.containsPlayer(player), "player not added to board!");

	viewModel.addPlayer(player);

	ok(viewModel.currentPlayers.length == 1);
	ok(viewModel.currentMonsters.length == 1);
});

test("mainViewModel adds player to next location when current location is full", function(){
	var viewModel = new MainViewModel(testUtils.uiDrawing, testUtils.uiUtilities, testUtils.characters);
	var uiDrawing = viewModel.uiDrawing;

	// get a player
	var player = viewModel.characters.archer;
	var otherPlayer = viewModel.characters.cleric;
	
	viewModel.addPlayer(player);
	viewModel.addPlayer(otherPlayer);

	ok(viewModel.currentPlayers.length == 2);
	ok(viewModel.currentMonsters.length == 2);
	ok(uiDrawing.gridObjects[uiDrawing.genGridKey(0, 0)] != null);
	ok(uiDrawing.gridObjects[uiDrawing.genGridKey(1, 0)] != null);
	ok(uiDrawing.gridObjects[uiDrawing.genGridKey(5, 5)] != null);
	ok(uiDrawing.gridObjects[uiDrawing.genGridKey(4, 5)] != null);
});