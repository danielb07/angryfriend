const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, Enemy1,Enemy3;
var backgroundImg,platform;
var me, slingshot;

var score = 0;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    Enemy1 = new Enemy(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    Enemy3 = new Enemy(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    
    let image = ["sprites/Me.png"]
    let rImage = random(image);
    me = new Me(200,50,rImage);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(me.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    textSize(20);
    fill("grey");
    text("Score"+score,width-300,50)
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    Enemy1.display();
    Enemy1.score();
    log1.display();

    box3.display();
    box4.display();
    Enemy3.display();
    Enemy3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    me.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
   
        Matter.Body.setPosition(me.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
   
       slingshot.attach(me.body);
       var random_mes = ["sprites/me.png", "sprites/redme.png", "sprites/greenme.png"]
       var random_me = random(random_mes)
       me.image = loadImage(random_me);
       Matter.Body.setPosition(me.body,{x:200,y:50})
    
}

