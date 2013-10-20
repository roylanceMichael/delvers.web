function Characters() {
	this.dwarf = new ImageAsset("dwarf", "/assets/Dwarf.png");
	this.monster = new ImageAsset("monster", "/assets/Zombie.png");

	// characters
	this.archer = new ImageAsset("archer", "/assets/Archer.png");
	this.cleric = new ImageAsset("cleric", "/assets/Cleric.png");
	this.paladin = new ImageAsset("paladin", "/assets/Paladin.png");
	this.thief = new ImageAsset("thief", "/assets/Thief.png");
	this.warrior = new ImageAsset("warrior", "/assets/Warrior.png");
	this.wizard = new ImageAsset("wizard", "/assets/Wizard.png");

	this.playerList = [
		this.archer,
		this.cleric,
		this.paladin,
		this.thief,
		this.warrior,
		this.wizard
	];

	this.monsterList = [
		this.monster
	];
}