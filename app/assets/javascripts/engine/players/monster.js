function Monster(name) {
	Player.call(this, name);
}

Monster.prototype = Object.create(Player.prototype);

// add any additional methods down here...