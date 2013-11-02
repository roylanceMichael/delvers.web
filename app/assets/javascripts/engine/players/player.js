function Player(name, hp) {
	this.name = name;
	this.hp = hp;

	this.discardedCards = [];
	this.drawCards = [];
	this.cardsInHand = [];
}

Player.prototype = {
	getName: function() {
		return this.name;
	},

	takeDamage: function(damage) {
		if(this.hp > damage) {
			this.hp = this.hp - damage;
		}
		else {
			this.hp = 0;
		}
	},

	addCard: function(card) {
		this.drawCards.push(card);
	},

	getCardCount: function() {
		return this.discardedCards.length + this.drawCards.length + this.cardsInHand.length;
	},

	getCardsInHand: function() {
		// might be empty, set up in case
		this.generateCardsInHandIfEmpty();

		return this.cardsInHand;
	},

	moveDiscardedToDraw: function() {
		// reset 
		while(this.discardedCards.length > 0) {
			this.drawCards.push(this.discardedCards.splice(0, 1)[0]);
		}
	},

	moveDrawToInHand: function(numberOfCards) {
		while(this.cardsInHand.length < 5 && this.drawCards.length > 0) {
			this.cardsInHand.push(this.drawCards.splice(0, 1)[0]);
		}
	},

	generateCardsInHandIfEmpty: function() {
		if(this.cardsInHand.length <= 0 && this.getCardCount() >= 5) {
			this.moveDiscardedToDraw();
			this.moveDrawToInHand();
		}
	},

	determineCardToUse: function() {
		// check if we don't have cards in hand
		this.generateCardsInHandIfEmpty();

		// keeping it simple right now, just grabbing the first one
		if(this.cardsInHand.length > 0) {
			return this.cardsInHand[0];
		}

		// should never reach this state...
		return null;
	},

	discardCard: function(card) {
		// I want to make sure it exists in our cards in hand
		var foundCardIdx = -1;
		for(var i = 0; i < this.cardsInHand.length; i++) {
			if(this.cardsInHand[i] === card) {
				foundCardIdx = i;
				break;
			}
		}
		
		// move the card to the discard pile... or leave method
		if(foundCardIdx > -1) {
			var discardedCard = this.cardsInHand.splice(foundCardIdx, 1)[0];
			this.discardedCards.push(discardedCard);
			return discardedCard;
		}

		return null;
	},

	useCard: function(card) {
		var card = this.discardCard(card);
		if(card != null) {
			card.use();
		}
	}
};