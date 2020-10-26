var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	console.log(packageBody);

	box1 = Bodies.rectangle(350,630,10,80, {isStatic:true});
	box2 = Bodies.rectangle(400,660,100,10, {isStatic:true});
	box3 = Bodies.rectangle(450,630,10,80, {isStatic:true});

	World.add(world, box1);
	World.add(world, box2);
	World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect(box1.position.x, box1.position.y, 10,80);
  rect(box2.position.x, box2.position.y, 100,10);
  rect(box3.position.x, box3.position.y, 10,80);
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 //packageIMG(200,200,50,50, {restitution:3,isStatic=false});
	Matter.Body.setStatic(packageBody,false)




	
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



