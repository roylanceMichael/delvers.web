function UiDrawing(canvas) {
	this.height = 500;
	this.width = 800;

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

		this.createGridDrawing("small");
	},

	createGridDrawing: function(size) {
		// let's just start out with 5x5
		var heightChunk = (this.height / 5);
		var widthChunk = (this.width / 5);

		// create vertical lines
		for(var y = 0; y < this.height; y = y + heightChunk) {
			this.ctx.moveTo(0, y);
			this.ctx.lineTo(this.width, y);
		}

		// create horizontal lines
		for(var x = 0; x < this.width; x = x + widthChunk) {
			this.ctx.moveTo(x, 0);
			this.ctx.lineTo(x, this.width);
		}

		this.ctx.strokeStyle = "#eee";
		this.ctx.stroke();
	},

	imgPosTuple: function(img, horizontalPos, verticalPos) {
		return { "img": img, "horizontalPos": horizontalPos, "verticalPos": verticalPos };
	},

	calculatePosition: function(canvasLocation) {
		// let's rethink this... i want to calculate a total of 10 players on each side
		// i have a width of 500..., with each image occupying 10s

		var horizontalPos = (this.width / 2) - (this.imageWidth);
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