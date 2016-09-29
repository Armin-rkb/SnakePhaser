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
		for (var i = 0; i < Snake.snake.length - 1; i++) {
			if (Snake.snakeHeadX == Snake.snake[i].x && Snake.snakeHeadY == Snake.snake[i].y){
				// Change to gameover scene.
				console.log("Game over!");
			}
		}
	},

	WallCollision: function(){
		if (Snake.snakeHeadX > 800 || Snake.snakeHeadY > 600 || Snake.snakeHeadX < 0 || Snake.snakeHeadY < 0){
			// Change to gameover scene.
			console.log("Game over!");
		}
	}
}