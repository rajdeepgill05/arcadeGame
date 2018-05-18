const level = document.querySelector('.level');
const highest = document.querySelector('.highest');

// Enemies our player must avoid
var Enemy = function(x, y, z) { 
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.z = z;
    this.sprite = 'images/enemy-bug.png';
    // this defines the enemy prottype
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.z * dt);
    if (this.x >= 500){
        this.x = -100;  // this updates the enemy
    }
    if(this.x + 40 > player.x && player.x + 40 > this.x && this.y + 40 > player.y && player.y + 40 > this.y ){
        player.x = 200;
        player.y = 404;
        level.innerHTML = 1;
        for(enemy of allEnemies){
            enemy.x = -100;
            enemy.z = randomNumber(100, 100 * level.innerHTML);
        }
    }
    
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function(x, y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(){
        if(player.y <= -44  ){
            level.textContent++;
            if(highest.textContent < level.textContent){
                highest.textContent = level.textContent;
            }
            for(enemy of allEnemies){
            enemy.x = -100;
            enemy.z *= randomNumber(1, level.textContent);
            }
            player.y = 404;
        }
    // this thing uopdates the player position        
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction){
    switch(direction){
        case 'left': //left arrow key
            if(player.x > 0)
            player.x -= 100;
            break;
        case 'up': //Up arrow key
            if(player.y > 0)
            player.y -= 90;
            break;
        case 'right': //right arrow key
            if(player.x < 365)
            player.x += 100;
            break;
        case 'down': //down arrow key
            if(player.y < 400)
            player.y += 90;
            break;						
    }
    
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const enemy1 = new Enemy(404, 60, 300);
const enemy2 = new Enemy(205, 150,250);
const enemy3 = new Enemy(503, 230, 200);
const allEnemies = [enemy1, enemy2, enemy3];


const player = new Player(200, 404);
const allPlayer = [player];
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
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }