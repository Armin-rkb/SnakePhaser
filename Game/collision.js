var Collision = {

	AppleCollision: function(){
			if (Snake.snakeHeadX == Pickup.apple.x && Snake.snakeHeadY == Pickup.apple.y){

				// Remove the apple.
				Pickup.apple.destroy();

				// Add snake part.
				Snake.AddSnakePart();

				// Spawn a new apple.
				Pickup.SpawnApple();
			}
		
	},

	SelfCollision: function(){
		for (var i = 0; i < snake.length - 1; i++) {
			if (Snake.snakeHeadX == snake[i].x && Snake.snakeHeadY == snake[i].y){
				// Change to gameover scene.
				game.state.start('MainMenu', true, false);
			}
		}
	},

	WallCollision: function(){
		if (Snake.snakeHeadX > ScreenSize.gameWidth || Snake.snakeHeadY > ScreenSize.gameHeight || Snake.snakeHeadX < 0 || Snake.snakeHeadY < 0){
			// Change to gameover scene.
			game.state.start('MainMenu');
		}
	}
}