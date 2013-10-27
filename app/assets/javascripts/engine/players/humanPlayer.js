function HumanPlayer(name) {
	Player.call(this, name, 10);
}

HumanPlayer.prototype = Object.create(Player.prototype);
HumanPlayer.prototype.constructor = HumanPlayer;