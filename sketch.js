const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var boy,boy_Image;
var stone;
var sling;
var gamestate="onsling";
var mango1,mango2,mango3,mango4,mango5;
var tree,tree_Image;
function preload()
{
	
	boy_Image=loadImage("Plucking mangoes/boy.png")
    tree_Image=loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(10,690,150000,15);
	boy=createSprite(130,650,20,20);
	boy.addImage("boy",boy_Image);
	boy.scale=0.1;
	
	stone = new Stone(130,50,20,20);
	
	sling = new SlingShot(stone.body,{x:90, y:600});
	
	mango1 = new Mango(1000,400,50,50);
    mango2 = new Mango(1250,250,50,50);
    mango3 = new Mango(1140,350,50,50);
    mango4 = new Mango(1200,400,50,50);
    mango5 = new Mango(1000,200,50,50);
	
	Engine.run(engine);
  
}


function draw() {
  background("white")
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
  sling.display();
  imageMode(CENTER)
  image(tree_Image,1100,400,650,600)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  
  drawSprites();
 
}

function mouseDragged(){
    if(gamestate=="onsling"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    if(gamestate=="onsling"){
        sling.fly();
        
        gamestate="launched"
    }
    }
 
function detectcollision(lstone,lmango){
   mangoBodyPosition=lmango.body.position;
   stoneBodyPosition=lstone.body.position;

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
   if(distance<=(lmango.width+lstone.width)/2){
       Matter.Body.setStatic(lmango.body,false);
   }
}

