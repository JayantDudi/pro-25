var cen;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function preload(){
	cenimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 685);
	rectMode(CENTER);

	cen=createSprite(1000,550,20,20);
	cen.addImage(cenimage,cenimage);
	cen.scale=0.82;

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1000,650);
	ball1=new Paper(300,600,30);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  drawSprites();
 
  
  groundObject.display();
  dustbinObj.display();
  ball1.display();
  
  keyp();

}

function keyp(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0,y:-0.2});
		}

		if(keyDown(LEFT_ARROW)){
			Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-0.1,y:0});
			}

			if(keyDown(RIGHT_ARROW)){
				Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0.1,y:0});
				}
	
	
	
}



