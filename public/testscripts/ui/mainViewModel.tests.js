test("mainViewModel ctor", function(){
	var viewModel = new MainViewModel(testUtils.uiDrawing, testUtils.characters);

	ok(viewModel != null, "cannot instantiate mainViewModel!");
	ok(viewModel.uiDrawing != null, "did not load uiDrawing!");
});

test("mainViewModel draw character to position", function(){
	var viewModel = new MainViewModel(testUtils.uiDrawing, testUtils.characters);

	// 

	ok(viewModel != null, "cannot instantiate mainViewModel!");
	ok(viewModel.uiDrawing != null, "did not load uiDrawing!");
});