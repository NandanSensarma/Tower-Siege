const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball,ground;
var stand1,backgroundIMG;
var polygon_img;

var score=0;

function preload(){
  polygon_img=loadImage("polygon.png");
  getBg();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
 
  block1 = new Block(300,275,30,40);
 
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(ball,{x:100,y:200});

}
function draw() {
  if (backgroundIMG){
  background(backgroundIMG);
  } 
  Engine.update(engine);

  textSize(20);
  text("SCORE:"+score,750,40);

  getBg();


  ground.display();
  stand1.display();

  strokeWeight(2);
  stroke(15);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(ball, {x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){

if (keyCode===32){
  slingShot.attach(ball);
}
}

async function getBg(){
    var response= await fetch ('http://worldtimeapi.org/api/timezone/Asia/kolkata');
    var responseJson= await response.json();
    var dateTime= responseJson.datetime; 
    var hour= dateTime.slice(11,13);
    console.log (hour);

    if (hour>6 && hour<14){
    bg= ('white');
    }
else {
    bg= ("black");
}
backgroundIMG=(bg);
}
