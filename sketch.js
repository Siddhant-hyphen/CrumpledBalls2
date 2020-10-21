
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	ground= new Ground(800,670,1600,20);
	paper= new Paper(200,450,70);
	dustbin1= new Dustbin(900,640,200,40);
	dustbin2= new Dustbin(780,600,40,120);
	dustbin3= new Dustbin(1020,600,40,120);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255);
  drawSprites();
  ground.display();
 // dustbin1.display();
 // dustbin2.display();
 // dustbin3.display();
 image(dustbinImage,900,500,170,170);
  paper.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100
		})
	}
}


