var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var leftSprite, rightSprite, bottomSprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	leftSprite= createSprite(270,610,20,100);
	leftSprite.shapeColor= "red";

	bottomSprite= createSprite(375,650,200,20);
	bottomSprite.shapeColor= "red";

	rightSprite= createSprite(480,610,20,100);
	rightSprite.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
	 leftBody= Bodies.rectangle(270,610,20,100,{isStatic:true});
	 World.add(world,leftBody)

	 bottomBody= Bodies.rectangle(375,650,200,20,{isStatic:true});
	 World.add(world,bottomBody)

	 rightBody= Bodies.rectangle(480,610,20,100,{isStatic:true});
	 World.add(world,rightBody)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic( packageBody, false);
    
  }
}



