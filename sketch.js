
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}

var circle;
var log1;
var log2;
var log3;

const xposition = 770;
const yposition = 695;
const radius = 2;



function preload()
{

log1.loadImage("dustbingreen.png");	
circle.loadImage("paper.png");
}

	function setup(){

	
	createCanvas(800, 700);

	Matter.Bodies.Circle(x,y,radius,[options])
   
	ground = createSprite(400,600,800,20);

	log1.addImage("paper");
	circle.addImage("dustbin");

	log1 = createSprite(720,585,150,20);
	log2 = createSprite(790,515,20,150);
	log3 = createSprite(650,515,20,150);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  circle.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
	
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});


 }
}

