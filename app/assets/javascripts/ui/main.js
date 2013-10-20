$(document).ready(function(){
	// don't do main if we're running tests... for now
	if(window.location.href.indexOf("test") > 0){
		return;
	}

	var canvas = document.createElement("canvas");
	canvas.style.position = "absolute";
	canvas.style.top = "0";
	canvas.style.left = "0";
	canvas.style["z-index"] = "1";

	var tileCanvas = document.createElement("canvas");
	tileCanvas.style.position = "absolute";
	tileCanvas.style.top = "0";
	tileCanvas.style.left = "0";
	tileCanvas.style["z-index"] = "0";

	var gameDisplayRow = document.getElementById("gameDisplayRow");
	if(gameDisplayRow != null) {
		gameDisplayRow.appendChild(canvas);
		gameDisplayRow.appendChild(tileCanvas);
	}

	// create my ui utilities that I'll use later
	var uiUtilities = new UiUtilities();

	// create initial uiDrawing
	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	uiDrawing.initCanvas();

	// and the characters
	var characters = new Characters();

	// feed them to the mainViewModel
	var mainViewModel = new MainViewModel(uiDrawing, characters);

	var characterDisplayId = "#characterDisplays";

	// setup bindings for images and load to dom
	uiUtilities.applyPlayerToMainViewModel(mainViewModel, characterDisplayId);

	ko.applyBindings(mainViewModel);
});
