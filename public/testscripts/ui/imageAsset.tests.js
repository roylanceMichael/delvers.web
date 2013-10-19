test("imageAsset ctor", function(){
	// just need to test the initial utilities...
	
	ok(testUtils.characters.dwarf != 1, "image asset didn't exist...");
	ok(testUtils.characters.dwarf.name == "dwarf", "imageAsset name is not dwarf");
	ok(testUtils.characters.dwarf.img != null, "img is null!");
	ok(testUtils.characters.dwarf.isLoaded == true, "image wasn't loaded...");
});