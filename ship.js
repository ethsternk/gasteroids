function Ship() {
    this.pos = createVector(width/2, height/2);
    // ship size, bitch
    this.r = 20;
    this.heading = 0;
    this.rotation = 0;
    // vel = velocity
    this.vel = createVector(1, 0);
    this.isBoosting = false;

    // dont understand - return later
    this.boosting = function(b) {
        this.isBoosting = b;
    }

    this.update = function() {
        if (this.isBoosting) {
            this.boost();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.99);
    }

    this.boost = function() {
        // calculating the force's direction from the angle of the ship
        var force = p5.Vector.fromAngle(this.heading);
        force.mult(0.1);
        this.vel.add(force);
    }

    this.render = function() {
        // save current translation and rotation state
        push();
        // centers ship
        translate(this.pos.x, this.pos.y);
        // rotates by radians
        // (PI / 2) offsets the force direction by 90 degrees (to line up with ship nose)
        rotate(this.heading + (PI / 2));
        // no fill
        fill(255, 127, 0);
        // triangle vertices
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r, 0);
        // restore current translation and rotation state
        pop();
        // stuff between push() and pop() doesn't affect other variables (cool)
    }

    this.setRotation = function(a) {
        this.rotation = a;
    }

    this.turn = function() {
        this.heading += this.rotation;
    }

    this.edges = function() {

        // rights leftssz
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }

        // bottoms up
        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }
}