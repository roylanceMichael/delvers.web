function Monster(name) {
	Player.call(this, name, 6);
}

Monster.prototype = Object.create(Player.prototype);

// add any additional methods down here...