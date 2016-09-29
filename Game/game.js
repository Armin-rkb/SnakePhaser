var Game = {

	delay: 0,

	// Loading our assets.
	preload: function(){
		cursors = game.input.keyboard.createCursorKeys();

		// Load our snake image.
		Game.load.image(Snake.snakeImageName, Snake.snakeImageSrc);
		Game.load.image(Pickup.pickupImageName, Pickup.pickupImageSrc);
	},

	// Setting up our gameworld.
	create: function(){
		// Rendering our snake parts on the screen.
		Snake.SpawnSnake();
		Pickup.SpawnApple();
	},

	// This function is called once each frame(60fps) 
	update: function(){   
		this.delay++;

		// Checking the input of out player each frame.	
		KeyboardInput.CheckDirection();

		if(this.delay%10 == 0){
			// Move our snake to the last given direction.
			Snake.MoveSnake();

			// Check the collision after the movement.
			Collision.AppleCollision();
			Collision.SelfCollision();
			Collision.WallCollision();
		}

	},
};