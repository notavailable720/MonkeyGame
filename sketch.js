var obstacleGroup, obstacleImg;
var bananaImg, bananaGroup;
var monkey, monkeyImg;

var backgroundImg, background1, score;

function preload() {
  monkeyImg = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("stone.png");
  
  backgroundImg = loadImage("jungle.jpg");
  
}

function setup() {
  createCanvas(800, 400);
  
  monkey = createSprite(200, 335, 20, 20);
  monkey.addAnimation("monkey", monkeyImg);
  monkey.scale = 0.1;
  
  background1 = createSprite(400, 200, 20, 20);
  background1.addImage("background1", backgroundImg);
  background1.depth = 0;
  
  score = 0;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(220);
  
  monkey.velocityY = monkey.velocityY + 0.7;
  
  if(monkey.y >= 340) {
    monkey.y = 339;
  }
  
  console.log(frameCount);
  
  if(keyDown("space") && monkey.y >= 339) {
    monkey.velocityY = -11;
  }
  
  
  stroke = 'black';
  textSize(15);
  text("score: " + score, 200, 200)
  
  if(bananaGroup.isTouching("monkey")) {
    bananaGroup.destroy();
  }
  
  spawnBanana();
  spawnStone();
  
  drawSprites();
}

function spawnBanana() {
  if(frameCount % 160 === 0) {
    banana = createSprite(810, 250, 10, 10);
    banana.addImage("banana", bananaImg);
    banana.velocityX = -5;
    banana.scale = 0.05;
    banana.lifetime = 170;
    
    //bananaGroup.add(banana);
  }
}

function spawnStone() {
  if(frameCount % 130 === 0) {
    stone = createSprite(810, 350, 10, 10);
    stone.addImage("stone", obstacleImg);
    stone.velocityX = -5;
    stone.scale = 0.2;
    stone.lifetime = 170;
    stone.depth = 4;
    
    //bananaGroup.add(banana);
  }
}