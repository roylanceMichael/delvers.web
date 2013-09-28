function Player(name) {
	this.name = name;
}

Player.prototype = {
	getName: function() {
		return this.name;
	}
};
