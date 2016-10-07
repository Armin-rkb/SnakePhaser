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
			// 
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
			if (this.differenceX < 0 && KeyboardInput.direction != "left")
				Snake.direction = "right";
			else if (this.differenceX > 0 && KeyboardInput.direction != "right")
				Snake.direction = "left";
		}
		else if (Math.abs(this.differenceY) > Math.abs(this.differenceX)){
			if (this.differenceY < 0 && KeyboardInput.direction != "up")
				Snake.direction = "down";
			else if (this.differenceY > 0 && KeyboardInput.direction != "down")
				Snake.direction = "up";
		}
	}
}