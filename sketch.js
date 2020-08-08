const Engine = Matter.Engine;

const World= Matter.World; 

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var particles = [];

var plinkos = [];

var division1,division2,division3,division4,division5,division6,division7,division8;

var ground;

function preload() {
  backgroundimage = loadImage("Screenshot_1.png");
}

function setup() {
  createCanvas(570,650);

  engine = Engine.create();
  world = engine.world; 

  ground = new Ground(285,645,570,10);

  division1 = new Divisions(5,550,10,200);
  division2 = new Divisions(85,550,10,200);
  division3 = new Divisions(165,550,10,200);
  division4 = new Divisions(245,550,10,200);
  division5 = new Divisions(325,550,10,200);
  division6 = new Divisions(405,550,10,200);
  division7 = new Divisions(485,550,10,200);
  division8 = new Divisions(565,550,10,200);

  for (var j = 40; j <= width; j = j + 50) { 
    plinkos.push(new Plinko(j,75,10)); 
  } 
  for (var j = 15; j <= width - 10; j = j + 50) { 
    plinkos.push(new Plinko(j,175,10)); 
  }
  for (var j = -10; j <= width - 20; j = j + 50) { 
    plinkos.push(new Plinko(j,275,10)); 
  }
  for (var j = -35; j <= width - 30; j = j + 50) { 
    plinkos.push(new Plinko(j,375,10)); 
  }
  
}

function draw() {
  background(backgroundimage);   
  Engine.update(engine);  

  ground.display();

  division1.display();
  division2.display();
  division3.display();
  
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();

  if(frameCount % 50 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  } 

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for (var b = 0; b < particles.length; b++){
    particles[b].display();
  }
}
