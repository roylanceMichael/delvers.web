$(document).ready(function(){
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

	var uiDrawing = new UiDrawing(canvas, tileCanvas);
	uiDrawing.initCanvas();

	uiDrawing.drawImageOnGrid("/assets/Dwarf.png", 3, 2);

	var gameDisplayRow = document.getElementById("gameDisplayRow");
	if(gameDisplayRow != null) {
		gameDisplayRow.appendChild(canvas);
		gameDisplayRow.appendChild(tileCanvas);
	}
});
