const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var trash1;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper();
	//ground1= new ground();
	trash1= new trash();

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(rgb(207,185,151));
  
  paper1.display();
  trash1.display();

  keyPressed();

//   drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, this.World.paper.body.position,{x:85,y:-85});
	}
}

