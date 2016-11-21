// Parts of our snake.
var snake;

var Snake = {
	// Snake travel speed.

	// The direction our snake will be heading.
	direction: 'right',
	
	speed: 10,
	// The name we will call the image and the file location.
	snakeImageName: 'snake',
	snakeImageSrc: 'Assets/snake.png',
	// How big our image is.
	snakeImageSize: 15,
	// How many parts of the snake we will spawn.
	startPartAmount: 10,

	// Coördinates of our snake head.
	snakeHeadX: null,
	snakeHeadY: null,
	
	oldPosX: null,
	oldPosY: null,

	SpawnSnake(){
		for (var i = 0; i < this.startPartAmount; i++) {
			snake[i] = Game.add.sprite(300 + i * this.snakeImageSize, 300, this.snakeImageName);
		}
	},

	AddSnakePart(){
		// Add another sprite to the beginning of our array and place it on the last changed position.
		snake.unshift(Game.add.sprite(this.oldPosX, this.oldPosY, 'snake'));
	},

	MoveSnake(){
		var firstCell = snake[snake.length - 1];
		var lastCell = snake.shift();
		this.oldPosX = lastCell.x;
		this.oldPosY = lastCell.y;

		switch(this.direction){
			case "right":
				lastCell.x = firstCell.x + this.snakeImageSize;
				lastCell.y = firstCell.y;
				break;
			case "left":
				lastCell.x = firstCell.x - this.snakeImageSize;
				lastCell.y = firstCell.y;
				break;
			case "up":
				lastCell.x = firstCell.x;
				lastCell.y = firstCell.y - this.snakeImageSize;
				break;
			case "down":
				lastCell.x = firstCell.x;
				lastCell.y = firstCell.y + this.snakeImageSize;
				break;
		}

		this.snakeHeadX = lastCell.x;
		this.snakeHeadY = lastCell.y;

		snake.push(lastCell);
		firstCell = lastCell;
	}
};
