function HumanPlayer(name) {
	Player.call(this, name);
}

HumanPlayer.prototype = Object.create(Player.prototype);
HumanPlayer.prototype.constructor = HumanPlayer;