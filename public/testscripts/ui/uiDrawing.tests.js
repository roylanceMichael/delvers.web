test("uiDrawing ctor", function(){
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	ok(uiDrawing != null, "cannot instantiate uiDrawing!");
});

test("uiDrawing initCanvas", function(){
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");
	
	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	uiDrawing.initCanvas();
	strictEqual(uiDrawing.height, canvas.height);
	strictEqual(uiDrawing.width, canvas.width);
});

test("uiDrawing initCanvas tile image exists", function(){
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	
	uiDrawing.initCanvas();

	var stopWatch = new Date();

	ok(uiDrawing.tileImg != null, "should pass locally, I'll come up with a better way to mock");
});

test("uiDrawing getGridTilePosition 0 0", function(){
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	var position = uiDrawing.getGridTilePosition(0, 0);

	strictEqual(position.verticalPos, 0);
	strictEqual(position.horizontalPos, 0);
});

test("uiDrawing getGridTilePosition 0 1", function(){
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	var position = uiDrawing.getGridTilePosition(0, 1);

	strictEqual(position.verticalPos, (uiDrawing.height / 6));
	strictEqual(position.horizontalPos, 0);
});

test("uiDrawing getGridTilePosition 4 3", function(){
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	var position = uiDrawing.getGridTilePosition(4, 3);

	strictEqual(position.horizontalPos, 4 * (uiDrawing.width / 6));
	strictEqual(position.verticalPos, 3 * (uiDrawing.height / 6));
});

// note: this is kind of integration testy in a way
var dwarfImageLoc = "/assets/Dwarf.png";

test("uiDrawing drawImageOnGrid 0 0", function(){
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	uiDrawing.initCanvas();
	uiDrawing.drawImageOnGrid(dwarfImageLoc, 0, 0);

	ok(uiDrawing.gridObjects["0~0"].src.indexOf(dwarfImageLoc) >= 0);
});

test("uiDrawing drawImageOnGrid 3 2", function(){
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	uiDrawing.initCanvas();
	uiDrawing.drawImageOnGrid(dwarfImageLoc, 3, 2);

	ok(uiDrawing.gridObjects["3~2"].src.indexOf(dwarfImageLoc) >= 0);
});

test("uiDrawing drawImageOnGrid 2 0 0 and 1 1", function(){
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	uiDrawing.initCanvas();
	uiDrawing.drawImageOnGrid(dwarfImageLoc, 0, 0);

	ok(uiDrawing.gridObjects["0~0"].src.indexOf(dwarfImageLoc) >= 0);
	ok(uiDrawing.gridObjects["1~1"] == null);

	uiDrawing.drawImageOnGrid(dwarfImageLoc, 1, 1);
	
	ok(uiDrawing.gridObjects["0~0"].src.indexOf(dwarfImageLoc) >= 0);
	ok(uiDrawing.gridObjects["1~1"].src.indexOf(dwarfImageLoc) >= 0);
});

test("uiDrawing drawImageOnGrid cachedImage 0 0", function(){
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	uiDrawing.initCanvas();
	uiDrawing.drawImageOnGrid(dwarfImageLoc, 0, 0);

	ok(uiDrawing.cachedImages[dwarfImageLoc] != null);
});

test("uiDrawing removeImageOnGrid 0 0", function(){
	var canvas = document.createElement("canvas");
	var tileCanvas = document.createElement("canvas");

	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	uiDrawing.initCanvas();
	uiDrawing.drawImageOnGrid(dwarfImageLoc, 0, 0);

	ok(uiDrawing.cachedImages[dwarfImageLoc] != null);

	uiDrawing.removeImageOnGrid(0, 0);
	ok(uiDrawing.gridObjects["0~0"] == null);
});