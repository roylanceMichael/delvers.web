function ImageAsset(name, location) {
	var self = this;
	self.name = name;
	self.location = location;
	self.img = new Image();
	self.isLoaded = false;
	
	self.img.onload = function() {
		self.isLoaded = true;
	}

	self.img.src = location;
}