Player = function (game) {
	this.sprite = game.add.sprite(this.game.width / 2, this.game.height - 50, 'player');
	this.sprite.anchor.setTo(0.5, 0.5);

}