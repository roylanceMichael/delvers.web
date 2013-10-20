// assumes ko is present
function UiUtilities() {
	this.imgWidth = 50;
	this.imgHeight = 50;
}

UiUtilities.prototype = {
	handleCharacters: function(character, idToAppend, mainViewModel) {
			ko.applyBindingsToNode(
				character.img, 
				// embed in function to pass static parameter
				{ click: function() { mainViewModel.addPlayer(character); } } );
			
			character.img.width = this.imgWidth;
			character.img.height = this.imgHeight;	

			$(idToAppend).append(character.img);
	},

	applyPlayerToMainViewModel: function(mainViewModel, idToAppend) {
		var characters = mainViewModel.characters;
		
		this.handleCharacters(characters.archer, idToAppend, mainViewModel);
		this.handleCharacters(characters.cleric, idToAppend, mainViewModel);
		this.handleCharacters(characters.paladin, idToAppend, mainViewModel);
		this.handleCharacters(characters.thief, idToAppend, mainViewModel);
		this.handleCharacters(characters.wizard, idToAppend, mainViewModel);
		this.handleCharacters(characters.warrior, idToAppend, mainViewModel);
	}
};