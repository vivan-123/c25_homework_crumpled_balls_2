
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash;
function preload()
{
	trash = loadImage("images/dustbin.png")
}

function setup() {
	//fill("white");
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	g1 = new Rectangle2(750,680,1600,20)

	r1 = new Rectangle1(950,550,20,150);
	r2 = new Rectangle1(1150,550,20,150);
	r3 = new Rectangle1(1050,640,150,20);

	c1 = new Circle(200,500,85);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  fill("orange");
  c1.display();
  fill("white");
  r3.display();
  r1.display();
  r2.display();
  fill("green");
  g1.display();	

  imageMode(CENTER);
  image(trash,1050,530,240,280);

  drawSprites();
 
}


function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		console.log("up arrow")
		Matter.Body.applyForce(c1.body,c1.body.position,{x:1.25,y:-1.25});
	}
}
