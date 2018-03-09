function Asteroid() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.r = random(15, 100);
    this.total = floor(random(5, 15));
    this.offset = [];
    var cr = floor(random(127, 255));
    var cg = floor(random(127, 255));
    var cb = floor(random(127, 255));

    for (var i = 0; i < this.total; i++) {
        this.offset[i] = random(-15, 50);
        cr = floor(random(40, 255));
        cg = floor(random(40, 255));
        cb = floor(random(40, 255));
    }

    this.update = function() {
        this.pos.add(this.vel);
    }

    this.render = function () {
        push();
        noFill();
        stroke(cr, cg, cb);
        translate(this.pos.x, this.pos.y);
        // ellipse(0, 0, this.r * 2)
        beginShape();
        for (var i = 0; i < this.total; i++) {
            var angle = map(i, 0, this.total, 0, TWO_PI);
            // these are the cartesian coordinates (abviously)
            var r = this.r + this.offset[i];
            var x = r * cos(angle);
            var y = r * sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);
        pop();
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