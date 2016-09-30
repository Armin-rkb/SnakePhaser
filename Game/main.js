var ScreenSize = {
	gameWidth: null,
	gameHeight: null,
}
ScreenSize.gameWidth = Math.floor((window.innerWidth / 15)* 15);
ScreenSize.gameHeight = Math.floor((window.innerHeight / 15)* 15);

var game = new Phaser.Game(ScreenSize.gameWidth, ScreenSize.gameHeight, Phaser.AUTO, '');

game.state.add('Game', Game);
game.state.start('Game');
