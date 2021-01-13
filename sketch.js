
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var trash;
var bg;
function setup() {
	createCanvas(800, 300);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(50,250,50,50);
	ground=new Ground(width/2, 305, width, 20);
	// console.log(paper);

  trash=loadImage("trash.png");
  bg=loadImage("park.jpg");
	Engine.run(engine);
 	 

}


function draw() {
  rectMode(CENTER);
  // background(bg);
  image(bg,0,-100,800,450)
  paper.display();
  // ground.display();

  noStroke();
  fill("white")

  boxPosition=width/2+200
  boxY=232;

  // boxleftSprite=rect(boxPosition+50, boxY, 15,120);

  boxLeftBody = Bodies.rectangle(boxPosition+50, boxY, 15,120 , {isStatic:true} );
  World.add(world, boxLeftBody);

  // boxBase=rect(boxPosition+100, boxY+53, 100,15);


    // boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+53, 100,15 , {isStatic:true} );
    // World.add(world, boxBottomBody);

  // boxrightSprite=rect(boxPosition+155 , boxY, 15,120);


  boxRightBody = Bodies.rectangle(boxPosition+155 , boxY, 15,120 , {isStatic:true} );
  World.add(world, boxRightBody);

  image(trash,boxPosition-30,boxY-80,200,150)


  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
	Body.applyForce(paper.body,paper.body.position,{x:120,y:-120});
  }
}





