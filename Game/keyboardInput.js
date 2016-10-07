var KeyboardInput = {

	// Changing the direciton to the corresponding key.
	CheckDirection: function(){

		if (cursors.right.isDown && Snake.direction != 'left')
	    	Snake.direction = 'right';

	    else if (cursors.left.isDown && Snake.direction != 'right')
	    	Snake.direction = 'left';
	    
	    else if (cursors.up.isDown && Snake.direction != 'down')
	    	Snake.direction = 'up';
	    
	    else if (cursors.down.isDown && Snake.direction != 'up')
	    	Snake.direction = 'down';
	}

}