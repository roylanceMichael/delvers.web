function GameActions() {
	this.startEnd = "";
	this.discard = "discard";
	this.draw = "draw";
	this.move = "move";
	this.attack = "attack";
	this.cleanup = "cleanup";

	this.actions = [ this.discard, this.draw, this.move, this.attack, this.cleanup];

	this.haveMoved = false;
	this.haveAttacked = false;
	
	this.currentState = this.discard;
}

GameActions.prototype = {
	reset: function() {
		this.currentState = this.startEnd;
		this.haveMoved = false;
		this.haveAttacked = false;
	},

	incrementAction: function() {
		if(this.currentState == this.startEnd) {
			this.acceptState(this.discard);
		}
		else if(this.currentState == this.discard) {
			this.acceptState(this.draw);
		}
		else if(this.currentState == this.draw) {
			this.acceptState(this.move);
		}
		else if(this.currentState == this.move) {
			this.acceptState(this.cleanup);
		}
		else if(this.currentState == this.attack) {
			this.acceptState(this.cleanup);
		}
	},

	getCurrentState: function() {
		return this.currentState;
	},

	acceptStateHelper: function(stateToCheck, nextStateToCheck, givenUserState) {
		return this.currentState == stateToCheck &&
				nextStateToCheck == givenUserState;
	},

	canAcceptState: function(state) {
		if(this.acceptStateHelper(this.startEnd, this.discard, state)) {
			return true;
		} 
		else if(this.acceptStateHelper(this.discard, this.draw, state)) {
			return true;
		} 
		else if((this.acceptStateHelper(this.draw, this.move, state) ||
				this.acceptStateHelper(this.attack, this.move, state)) &&
				this.haveMoved == false) {
			return true;
		}
		else if((this.acceptStateHelper(this.move, this.attack, state) ||
				this.acceptStateHelper(this.draw, this.attack, state)) &&
				this.haveAttacked == false) {
			return true;
		}
		else if(this.acceptStateHelper(this.attack, this.cleanup, state) ||
				this.acceptStateHelper(this.move, this.cleanup, state)) {
			return true;
		}
		else if(this.acceptStateHelper(this.cleanup, this.startEnd, state)) {
			return true;
		}
		
		return false;
	},

	acceptState: function(state) {
		var result = this.canAcceptState(state);

		if(result == true) {
			this.currentState = state;
		}

		if(state == this.attack) {
			this.haveAttacked = true;
		}
		
		if(state == this.move) {
			this.haveMoved = true;
		}

		if(state == this.startEnd) {
			this.haveAttacked = false;
			this.haveMoved = false;
		}

		return result;
	}
}