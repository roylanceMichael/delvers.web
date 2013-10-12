var canvasSettings = {
	height: 400,
	width: 500
};

$(document).ready(function(){
	var canvas = document.createElement("canvas");
	
	var uiDrawing = new UiDrawing(canvas);
	uiDrawing.initCanvas();
	uiDrawing.drawImage("/assets/Dwarf.png", "bottom");

	var gameDisplayRow = document.getElementById("gameDisplayRow");
	
	if(gameDisplayRow != null) {
		gameDisplayRow.appendChild(canvas);
	}
})
