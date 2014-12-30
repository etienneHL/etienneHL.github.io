SimpleEnemy = function(game) {

	this.alive = true;
	this.health = ENEMY_HEALTH;

	this.sprite = game.add.sprite(x, y, 'greenEnemy');
	this.sprite.anchor.setTo(0.5, 0.5);
	this.sprite.outOfBoundsKill = true;
	this.sprite.checkWorldBounds = true;
	this.sprite.animations.add('fly', [ 0, 1, 2 ], 20, true);
	this.sprite.animations.add('hit', [ 3, 1, 3, 2 ], 20, false);
	this.sprite.events.onAnimationComplete.add( function (e) {
	  e.play('fly');
	}, game);

	this.reward = BasicGame.ENEMY_REWARD;

	this.sprite.body.velocity.y = this.rnd.integerInRange(
		BasicGame.ENEMY_MIN_Y_VELOCITY, BasicGame.ENEMY_MAX_Y_VELOCITY);
};

SimpleEnemy.prototype.damage = function() {
	this.health -= 1;
	if (this.health <= 0) {
		this.alive = false;
		this.sprite.kill();
		return true;
	}

	return false;
};

SimpleEnemy.prototype.update = function() {

}