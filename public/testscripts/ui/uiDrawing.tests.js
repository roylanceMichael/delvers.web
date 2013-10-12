test("uiDrawing ctor", function(){
	var uiDrawing = new UiDrawing(document.createElement("canvas"));
	ok(uiDrawing != null, "cannot instantiate uiDrawing!");
});

test("uiDrawing initCanvas", function(){
	var canvas = document.createElement("canvas");
	var uiDrawing = new UiDrawing(canvas);
	uiDrawing.initCanvas();
	strictEqual(uiDrawing.height, canvas.height);
	strictEqual(uiDrawing.width, canvas.width);
});

test("uiDrawing calculateGridTilePosition 0 0", function(){
	var canvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas);
	var position = uiDrawing.calculatePosition("top");
	
	strictEqual(position.horizontalPos, (uiDrawing.width / 2) - (uiDrawing.imageWidth / 2));
	strictEqual(position.verticalPos, 10);
});

test("uiDrawing calculatePosition top", function(){
	var canvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas);
	var position = uiDrawing.calculatePosition("top");
	
	strictEqual(position.horizontalPos, (uiDrawing.width / 2) - (uiDrawing.imageWidth / 2));
	strictEqual(position.verticalPos, 10);
});

test("uiDrawing calculatePosition bottom", function(){
	var canvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas);
	var position = uiDrawing.calculatePosition("bottom");
	
	strictEqual(position.horizontalPos, (uiDrawing.width / 2) - (uiDrawing.imageWidth / 2));
	strictEqual(position.verticalPos, uiDrawing.height - 2 * uiDrawing.imageHeight);
});

// note: this is kind of integration testy in a way
var dwarfImageLoc = "/assets/Dwarf.png";

test("uiDrawing drawImage bottom main", function(){
	var canvas = document.createElement("canvas");
	var uiDrawing = new UiDrawing(canvas);
	uiDrawing.initCanvas();
	uiDrawing.drawImage(dwarfImageLoc, "bottom", true);

	strictEqual(uiDrawing.bottomImages.length, 1);
	ok(uiDrawing.bottomImages[0].img.src.indexOf(dwarfImageLoc) >= 0);
	// frankly, I just want to make sure it's an integer
	ok(uiDrawing.bottomImages[0].horizontalPos >= 0);
	ok(uiDrawing.bottomImages[0].verticalPos >= 0);
	strictEqual(uiDrawing.topImages.length, 0);
});

test("uiDrawing drawImage top main", function(){
	var canvas = document.createElement("canvas");
	var uiDrawing = new UiDrawing(canvas);
	uiDrawing.initCanvas();
	uiDrawing.drawImage(dwarfImageLoc, "top", true);

	strictEqual(uiDrawing.bottomImages.length, 0);
	strictEqual(uiDrawing.topImages.length, 1);
	ok(uiDrawing.topImages[0].img.src.indexOf(dwarfImageLoc) >= 0);
	// frankly, I just want to make sure it's an integer
	ok(uiDrawing.topImages[0].horizontalPos >= 0);
	ok(uiDrawing.topImages[0].verticalPos >= 0);
});

test("uiDrawing drawImage 2 top", function(){
	var canvas = document.createElement("canvas");
	var uiDrawing = new UiDrawing(canvas);
	uiDrawing.initCanvas();
	uiDrawing.drawImage(dwarfImageLoc, "top", true);

	strictEqual(uiDrawing.bottomImages.length, 0);
	strictEqual(uiDrawing.topImages.length, 1);
	ok(uiDrawing.topImages[0].img.src.indexOf(dwarfImageLoc) >= 0);
	// frankly, I just want to make sure it's an integer
	ok(uiDrawing.topImages[0].horizontalPos >= 0);
	ok(uiDrawing.topImages[0].verticalPos >= 0);
});