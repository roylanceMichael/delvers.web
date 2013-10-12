function UiDrawing(canvas) {
	this.height = 400;
	this.width = 500;

	this.imageHeight = 10;
	this.imageWidth = 10;

	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");

	this.topImages = [];
	this.bottomImages = [];
}

UiDrawing.prototype = {
	// setup canvas element
	initCanvas: function() {
		this.topImages = [];
		this.bottomImages = [];

		this.canvas.setAttribute('height', this.height);
		this.canvas.setAttribute('width', this.width);

		this.ctx.strokeRect(0, 0, this.width, this.height);
	},

	imgPosTuple: function(img, horizontalPos, verticalPos) {
		return { "img": img, "horizontalPos": horizontalPos, "verticalPos": verticalPos };
	},

	calculatePosition: function(canvasLocation) {
		var horizontalPos = (this.width / 2) - (this.imageWidth / 2);
		var verticalPos = 10;

		if(canvasLocation == "bottom") {
			verticalPos = this.height - (6 * this.imageHeight);
		}

		return { "horizontalPos": horizontalPos, "verticalPos": verticalPos };
	},

	drawImage: function(imageLocation, canvasLocation) {
		var img = new Image();

		img.width = this.imageWidth;
		img.height = this.imageHeight;

		var pos = this.calculatePosition(canvasLocation);
		var tuple = this.imgPosTuple(img, pos.horizontalPos, pos.verticalPos);

		if(canvasLocation == "bottom") {
			this.bottomImages.push(tuple);
		} else {
			this.topImages.push(tuple);
		}

		var currentCtx = this.ctx;

		img.onload = function() {
			currentCtx.drawImage(tuple.img, tuple.horizontalPos, tuple.verticalPos);
		}

		img.src = "/assets/Dwarf.png";
	}
};