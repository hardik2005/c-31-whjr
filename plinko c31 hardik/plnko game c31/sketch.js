const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
var particles = [];
var plinkos = [];


function setup() {
  createCanvas(560,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 690, 1200, 10);

  stand1 = new Division(10, 680, 10, 200);
  stand2 = new Division(100, 680, 10, 200);
  stand3 = new Division(190, 680, 10, 200);
  stand4 = new Division(280, 680, 10, 200);
  stand5 = new Division(370, 680, 10, 200);
  stand6 = new Division(460, 680, 10, 200);
  stand7 = new Division(550, 680, 10, 200);

  for (var j = 35; j <=width; j=j+50) 
  {
     plinkos.push(new Plink(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
     plinkos.push(new Plink(j,175,10));
  }

   for (var j = 35; j <=width; j=j+50) 
  {
     plinkos.push(new Plink(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plink(j,375,10));  
  }

  for (var j = 30; j <=width; j=j+50) 
  {
    plinkos.push(new Plink(j,475,10)); 
  }
}
function draw() {
   background(247,212,87);

   Engine.update(engine);

   ground.display();

   stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
 }
 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
}