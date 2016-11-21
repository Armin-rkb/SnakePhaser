var MainMenu = {
		preload: function(){
		// Load our main menu image.
		game.load.image('pressToStart', 'Assets/PressToStart.png');
	},

	// Setting up our gameworld.
	create: function(){
		game.add.sprite((ScreenSize.gameWidth / 2) - 394, ScreenSize.gameHeight / 2, 'pressToStart');
	},

	// This function is called once each frame(60fps) 
	update: function(){
		if (game.input.activePointer.isDown)
			game.state.start('Game');		
	}
};