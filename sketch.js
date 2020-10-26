
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,
var bobObject2,
var bobObject3,
var bobObject4,
var bobObject5,

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1 = newrope(bobObject1.body,roofObject.body,-bobDiameter*2,0)

display()
{
	var pointA = this.rope.BodyA.position;
	var pointB = this.rope.BodyB.position;

strokeWeight(2);

var Anchor1X = pointA.X;
var Anchor1Y = pointA.y;

var Anchor2X = pointB.x + this.offsetX
var Anchor2Y = pointB.y + this.offsetY

line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

}

  drawSprites();
}



