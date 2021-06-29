const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var box1,box2,box3,box4;
var ground;
var ball1;

function setup()
{
    createCanvas(800,600);
    myengine=Engine.create();
    myworld=myengine.world;
    box1=new Box(500,200,50,50);
    box2=new Box(500,300,50,50);
    box3=new Box(500,100,50,50);
    box4=new Box(500,150,50,50);
    box5=new Box(550,200,50,50);
    box6=new Box(550,300,50,50);
    box7=new Box(550,100,50,50);
    box8=new Box(550,150,50,50);
    box9=new Box(600,200,50,50);
    box10=new Box(600,300,50,50);
    box11=new Box(600,100,50,50);
    box12=new Box(600,150,50,50);
    ball1=new Ball(350,50);
    ground=new Ground(200,590,1200,20);
    sling=new SlingShot(ball1.body,{x:350,y:10})
}

function draw()
{
    Engine.update(myengine);
    background(0);
    fill("cyan");
    ball1.display();
    fill("brown");
    box1.display();
    fill("blue");
    box2.display();
    fill("red");
    box3.display();
    fill("pink");
    box4.display();
    fill("brown");
    box5.display();
    fill("blue");
    box6.display();
    fill("red");
    box7.display();
    fill("pink");
    box8.display();
    fill("brown");
    box9.display();
    fill("blue");
    box10.display();
    fill("red");
    box11.display();
    fill("pink");
    box12.display();
    fill("brown");
    ground.display();
    noFill();
    sling.display();
}