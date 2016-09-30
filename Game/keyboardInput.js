KeyboardInput = {

	// Setting the starting direction to right.
	direction: 'right',

	// Changing the direciton to the corresponding key.
	CheckDirection: function(){

		if (cursors.right.isDown && this.direction != 'left')
	    	this.direction = 'right';

	    else if (cursors.left.isDown && this.direction != 'right')
	    	this.direction = 'left';
	    
	    else if (cursors.up.isDown && this.direction != 'down')
	    	this.direction = 'up';
	    
	    else if (cursors.down.isDown && this.direction != 'up')
	    	this.direction = 'down';
	},

}