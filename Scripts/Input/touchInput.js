var TouchInput = {
	startPosX: null,
	startPosY: null,
	endPosX: null,
	endPosY: null,
	differenceX: null,
	differenceY: null,
	touchGet: false,

	CheckTouch: function(){
		// Set our starting position when we press down.
		if (game.input.pointer1.isDown && !this.touchGet){
			this.startPosX = game.input.pointer1.positionDown.x;
			this.startPosY = game.input.pointer1.positionDown.y;
			this.touchGet = true;
		}
		// Set our ending position when we stopped pressing down
		else if (game.input.pointer1.isUp && this.touchGet){
			this.endPosX = game.input.pointer1.positionUp.x;
			this.endPosY = game.input.pointer1.positionUp.y;
			this.touchGet = false;
			// Checking the swipe direction.
			this.CalculateDifference();
			this.CalculateDirection();
		}
	},

	CalculateDifference: function(){
		this.differenceX = this.startPosX - this.endPosX;
		this.differenceY = this.startPosY - this.endPosY;
	},

	CalculateDirection: function(){
		if (Math.abs(this.differenceX) > Math.abs(this.differenceY)){
			if (this.differenceX < 0 && Snake.direction != Direction.left)
				Snake.direction = Direction.right;
			else if (this.differenceX > 0 && Snake.direction != Direction.right)
				Snake.direction = Direction.left;
		}
		else if (Math.abs(this.differenceY) > Math.abs(this.differenceX)){
			if (this.differenceY < 0 && Snake.direction != Direction.up)
				Snake.direction = Direction.down;
			else if (this.differenceY > 0 && Snake.direction != Direction.down)
				Snake.direction = Direction.up;
		}
	}
}