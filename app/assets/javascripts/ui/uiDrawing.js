function UiDrawing(canvas, tileCanvas) {
	this.height = 500;
	this.width = 800;

	this.tileImg = null;
	this.tileLocation = "/assets/Tile.jpg";
	
	this.chunkSize = 6;
	this.horizontalChunkSize = (this.width / this.chunkSize);
	this.verticalChunkSize = (this.height / this.chunkSize);

	this.imageHeight = 10;
	this.imageWidth = 10;

	this.imageTileMarginWidth = this.horizontalChunkSize / 3;
	this.imageTileMarginHeight = this.verticalChunkSize / 4;

	this.canvas = canvas;
	this.ctx = this.canvas.getContext("2d");

	this.tileCanvas = tileCanvas;
	this.tileCtx = this.tileCanvas.getContext("2d");

	this.gridObjects = {};
	this.cachedImages = {};
}

UiDrawing.prototype = {
	// setup canvas element
	initCanvas: function() {
		var self = this;

		this.gridObjects = {};

		this.canvas.setAttribute('height', this.height);
		this.canvas.setAttribute('width', this.width);

		this.tileCanvas.setAttribute('height', this.height);
		this.tileCanvas.setAttribute('width', this.width);

		// setup the tile image at the beginning
		if(this.tileImg == null) {
			this.tileImg = new Image();

			this.tileImg.onload = function() {
				self.drawTiles();
			}

			this.tileImg.src = this.tileLocation;
		}
	},

	// checks whether we have finished initialization
	finishedInit: function() {
		return this.tileImg != null;
	},

	drawTiles: function() {
		// we need initialization to finish
		if(!this.finishedInit()) {
			return;
		}

		// manually set the first chunk(s) to be the image
		this.tileCtx.drawImage(this.tileImg, 0, 0, this.horizontalChunkSize, this.verticalChunkSize);

		for(var x = 1; x < this.width; x = x + this.horizontalChunkSize) {
			for(var y = 1; y < this.height; y = y + this.verticalChunkSize) {
				// http://stackoverflow.com/questions/5642383/copy-imagedata-by-value-in-javascript - thank you!
				var dst = this.tileCtx.getImageData(0, 0, this.horizontalChunkSize, this.verticalChunkSize);
				this.tileCtx.putImageData(dst, x, y);
			}
		}
	},

	// get's coordinates for the given tiles (0, 0), (0, 1)... (n, n)
	getGridTilePosition: function(x, y) {
		return { 
			"horizontalPos": (x * this.horizontalChunkSize), 
			"verticalPos": (y * this.verticalChunkSize) 
		};
	},

	drawImageOnGrid: function(imageLocation, x, y) {
		var img;
		var self = this;

		if(this.cachedImages[imageLocation] != undefined) {
			img = this.cachedImages[imageLocation];
		}
		else {
			img = new Image();
			this.cachedImages[imageLocation] = img;
		}

		img.width = this.imageWidth;
		img.height = this.imageHeight;

		var pos = this.getGridTilePosition(x, y);

		// set the key / image
		this.gridObjects[x + "~" + y] = img;

		img.onload = function() {
			self.ctx.drawImage(img, 
				pos.horizontalPos + self.imageTileMarginWidth, 
				pos.verticalPos + self.imageTileMarginHeight);
		}

		img.src = imageLocation;
	},

	removeImageOnGrid: function(x, y) {
		var key = x + "~" + y;
		if(this.gridObjects[key] != null) {
			// clean up
			delete this.gridObjects[key];
		}

		var gridPos = this.getGridTilePosition(x, y);
		
		this.ctx.clearRect(
			gridPos.horizontalPos, 
			gridPos.verticalPos,
			this.horizontalChunkSize,
			this.verticalChunkSize);
	}
};