var Snake = {
	// Parts of our snake.
	snake: [],
	// Snake travel speed.
	speed: 10,
	// The name we will call the image and the file location.
	snakeImageName: 'snake',
	snakeImageSrc: 'Assets/snake.png',
	// How big our image is.
	snakeImageSize: 15,
	// How many parts of the snake we will spawn.
	startPartAmount: 10,

	snakeHeadX: null,
	snakeHeadY: null,

	oldPosX: null,
	oldPosY: null,

	SpawnSnake(){
		for (var i = 0; i < this.startPartAmount; i++) {
			this.snake[i] = Game.add.sprite(300 + i * this.snakeImageSize, 300, this.snakeImageName);
		}
	},

	AddSnakePart(){
		// Add another sprite to the beginning of our array and place it on the last changed position.
		this.snake.unshift(Game.add.sprite(this.oldPosX, this.oldPosY, 'snake'));
	},

	MoveSnake(){
		var firstCell = this.snake[this.snake.length - 1];
		var lastCell = this.snake.shift();
		this.oldPosX = lastCell.x;
		this.oldPosY = lastCell.y;

		if (KeyboardInput.direction == "right"){
			lastCell.x = firstCell.x + this.snakeImageSize;
			lastCell.y = firstCell.y;
		}

		else if (KeyboardInput.direction == "left"){
			lastCell.x = firstCell.x - this.snakeImageSize;
			lastCell.y = firstCell.y;
		}

		else if (KeyboardInput.direction == "up"){
			lastCell.x = firstCell.x;
			lastCell.y = firstCell.y - this.snakeImageSize;
		}

		else if (KeyboardInput.direction == "down"){
			lastCell.x = firstCell.x;
			lastCell.y = firstCell.y + this.snakeImageSize;
		}

		this.snakeHeadX = lastCell.x;
		this.snakeHeadY = lastCell.y;

		this.snake.push(lastCell);
		firstCell = lastCell;
	},
};
