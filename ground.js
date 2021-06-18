class Ground {
    constructor(x, y, width, height) {
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       var options = {
           isStatic: true
       };
       this.body = Bodies.rectangle(x, y, width, height, options);
       World.add(world, this.body);
       this.image = loadImage('groundimg.png');
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}