// assumes ko is present
function UiUtilities(ko, $) {
	this.ko = ko;
	this.$ = $;
	this.imgWidth = 50;
	this.imgHeight = 50;
}

UiUtilities.prototype = {
	handleCharacters: function(character, idToAppend, mainViewModel) {
		this.ko.applyBindingsToNode(
			character.img, 
			// embed in function to pass static parameter
			{ click: function() { mainViewModel.addPlayer(character); } } );
		
		character.img.width = this.imgWidth;
		character.img.height = this.imgHeight;	

		this.$(idToAppend).append(character.img);
	}
};