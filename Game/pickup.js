var Pickup = {

	apple: null,

	// The name we will call the image and the file location.
	pickupImageName: 'pickup',
	pickupImageSrc: 'Assets/pickup.png',
	
	// Spawning our apples on the game field.
	SpawnApple: function(){
		this.apple = Game.add.sprite(Math.floor(Math.random()*40) * 15, Math.floor(Math.random()*30) * 15, this.pickupImageName);
	},
}