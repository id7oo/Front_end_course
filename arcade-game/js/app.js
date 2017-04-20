// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 200) + 200);;
    this.height = 80;
    this.width = 30;


};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
//updating the enemy's speed
    this.x += this.speed * dt;

    if (this.x > 600) {
        this.x = -100;
    }
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//Player's character image
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.height = 30;
    this.width = 80;

};

//Player should not go beyond boundaries
//If player win it will show in pop-up window.
Player.prototype.update = function(dt) {
    this.x * (dt);
    this.y * (dt);

    if (this.x > 400) {
        this.x = 0;
    }

    if (this.x < -50) {
        this.x = 0;
    }

    if (this.y < 0) {
        alert("you win!!");
        this.y = 400;
    }

    if (this.y > 400) {
        this.y = 400;
    }


};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {

    if (direction === 'left') {
        this.x = this.x - 100;
    }
    if (direction === 'up') {
        this.y = this.y - 100;
    }

    if (direction === 'right') {
        this.x = this.x + 100;
    }

    if (direction === 'down') {
        this.y = this.y + 100;
    }


};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
allEnemies[0] = new Enemy(100, 200);
allEnemies[1] = new Enemy(100, 100);
allEnemies[2] = new Enemy(100, 60);


var player = new Player(50, 400);



Player.prototype.resetPlayer = function() {
    this.x = 0;
    this.y = 420;
};

Player.prototype.checkCollisions = function(allEnemies) {
    var player = this;
    console.log(this);
    for (var i = 0; i < allEnemies.length; i++) {
        if (allEnemies[i].x < this.width + this.x && allEnemies[i].width + allEnemies[i].x > this.x && allEnemies[i].y < this.y + this.height && allEnemies[i].height + allEnemies[i].y > this.y) {
            player.resetPlayer();
        }

    }
};




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});