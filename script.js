var ship;
var asteroids = [];
var lasers = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    for (var i = 0; i < 10; i++) {
        asteroids.push(new Asteroid());
    }
}

function draw() {
    background(0);

    for (var i = 0; i < asteroids.length; i++) {
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();
    }

    for (var i = 0; i < lasers.length; i++) {
        lasers[i].render();
        lasers[i].update();
        // lasers[i].edges();
    }

    ship.render();
    ship.turn();
    ship.update();
    ship.edges();

}

function keyReleased() {
    ship.setRotation(0);
    ship.boosting(false);
}

function keyPressed() {
    if (key == ' ') {
        lasers.push(new Laser(ship.pos, ship.heading));
    }
    // RIGHT_ARROW and LEFT_ARROW hard coded into p5?
    if (keyCode == RIGHT_ARROW) {
        ship.setRotation(0.1);
    }
    if (keyCode == LEFT_ARROW) {
        ship.setRotation(-0.1);
    }
    if (keyCode == UP_ARROW) {
        ship.boosting(true);
    }
}