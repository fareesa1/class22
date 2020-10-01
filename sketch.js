const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var  ball;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    ball = Bodies.circle(200,100,20);
    World.add(world,ball);

}

function draw(){
    background(255,255,255);
    Engine.update(engine);
    
   
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
