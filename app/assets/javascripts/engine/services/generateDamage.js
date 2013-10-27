function GenerateDamage(modifier) {
	this.modifier = modifier;
}

GenerateDamage.prototype = {
	getDamage: function() {
		var val = Math.ceil(Math.random() * this.modifier);
		
		// making this reliable for tests
		if(val == 0) {
			return 1;
		}

		return val;
	}
};