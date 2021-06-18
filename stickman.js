class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        var options = {
            restitution: 0.2,
            friction: 100,
            density: 5,
        };
        this.body = Bodies.circle(x, y, 50, options);
        World.add(world, this.body);
        this.image = loadImage('ball.png');
    };
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        if (keyCode === 32) {
            this.body.applyForce
        }
        
        image(this.image, this.x, this.y, 100, 100);

        pop();
        
    }

}