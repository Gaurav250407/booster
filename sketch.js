
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bob1,bob2,bob3,bob4,bob5,roof;

var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new BOB(320,575,40);
	bob2 = new BOB(360,575,40);
	bob3 = new BOB(400,575,40);
	bob4 = new BOB(440,575,40);
	bob5 = new BOB(480,575,40);

	roof = new ROOF(400,250,230,20);

	rope1 = new ROPE(roof.body,bob1.body,-80,0);
	rope2 = new ROPE(roof.body,bob2.body,-40,0);
	rope3 = new ROPE(roof.body,bob3.body,0,0);
	rope4 = new ROPE(roof.body,bob4.body,40,0);
	rope5 = new ROPE(roof.body,bob5.body,80,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		//Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}



