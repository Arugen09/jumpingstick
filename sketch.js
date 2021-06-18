
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bgimg, stickmanimg, groundimg, ground, player, playerbody, enemybody, stickmananimation, platforms, oneground, lavaimg, barrierimg, lavapits, lavaground, dragonimg, dragon;
var jumping = true;
function preload() {
	bgimg = loadImage('netherbg.png');
	stickmanimg = loadImage('ball.png');
	stickmananimation = loadAnimation('stickanimreal.gif');
	groundimg = loadImage('groundimg.png');
	barrierimg = loadImage('netherbarrier.png');
	lavaimg = loadImage('lava.jpg');
	dragon = loadAnimation()
};

function setup() {
	createCanvas(1366, 746);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = createSprite(683, 700, 1400, 100);
	ground.addImage(groundimg)
	player = createSprite(200, 560, 145, 145);
	player.scale = 0.5;
	platforms = createGroup();
	lavapits = createGroup();

	player.addAnimation('running', stickmananimation);
	Engine.run(engine);
}


function draw() {
    spawnObstacles();
	spawnBarriers();
	background(bgimg);
    rectMode(CENTER);
	// player.velocityY += 1;
	player.collide(ground);
	
	if (player.isTouching(platforms) === true) {
		jumping = true;
	} else {
		jumping = false;
	}
	player.velocityY += 2;
	drawSprites();
	
	player.bounce(platforms);
}

function keyPressed() {
	if (keyCode === 38 && (player.y > 550 || jumping === true)) {
		player.velocityY -= 35;
	}
}
function spawnBarriers() {
	if (frameCount%60 === 0) {
		oneground = createSprite(random(1400, 1600), 550, 50, 90);
		oneground.scale = 0.5;
		oneground.addImage(barrierimg);
		platforms.add(oneground);
		oneground.velocityX = -10;
	}
}
function spawnObstacles() {
	if (frameCount%120 === 0) {
		lavaground = createSprite(random(1500, 1700), 650, 90, 50);
		lavaground.scale = 0.75;
		lavaground.addImage(lavaimg);
		lavapits.add(lavaground);
		lavaground.velocityX = -10;
	} 
}

