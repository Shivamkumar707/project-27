const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1000, 800);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(500,230,280,30);

  bob1 = new Bob(400,480,50);
  bob2 = new Bob(450,480,50);
  bob3 = new Bob(500,480,50);
  bob4 = new Bob(550,480,50);
  bob5 = new Bob(600,480,50);

  rope1 = new Rope(bob1.body,{x:400, y:230});
  rope2 = new Rope(bob2.body,{x:450, y:230});
  rope3 = new Rope(bob3.body,{x:500, y:230});
  rope4 = new Rope(bob4.body,{x:550, y:230});
  rope5 = new Rope(bob5.body,{x:600, y:230});

  keyPressed();

  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightgray");

  ground.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-90})

  }
}