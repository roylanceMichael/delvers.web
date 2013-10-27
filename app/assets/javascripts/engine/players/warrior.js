function Warrior(name) {
	HumanPlayer.call(this, name, 18);
}

Warrior.prototype = Object.create(HumanPlayer.prototype);