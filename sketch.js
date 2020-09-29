var bananaimage,obstacleimage,obstaclegroup,foodgroup,backgrounds;
var score;
var monkeyimage,monkey;
var back;
var play = 1;
var end = 0;
var gamestate = play;
var ground;

function preload(){

backgrounds=loadImage("jungle.jpg");

  monkeyimage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  
  bananaimage=loadImage("banana.png");
  obstacleimage=loadImage("stone.png");
  
  
}

function setup() {
  createCanvas(400, 400);
  
  
  obstaclesgroup=new Group();
  foodgroup=new Group();
  score=0;
  
  
    back=createSprite(200,200,20,20);
  back.addImage(backgrounds);
  back.velocityX=-2;

   ground=createSprite(200,370,400,10);
  ground.visible=false;
  
monkey=createSprite(50,360,20,20);
  monkey.addAnimation("r",monkeyimage);
  monkey.scale=0.08;
  
  
}






function draw() {
  background(220);
  
  if(gamestate===play){
     spawnObstacles();
  spawnfood();
    back.velocityX=-2;
    
     if(monkey.isTouching(obstaclesgroup)&&monkey.scale===0.08){
   gamestate=end;
     }
    if(monkey.isTouching(foodgroup)&&gamestate===play ){
    foodgroup.destroyEach();
    score=score+2;
  }
     if(monkey.isTouching(obstaclesgroup)&&monkey.scale>0.08){
   monkey.scale=0.08;
  }
  
  }
  
  if(gamestate===end){
  obstaclesgroup.velocityX=0;
   foodgroup.velocityX=0;
   obstaclesgroup.destroyEach();
   foodgroup.destroyEach(); 
    score=score;
    back.velocityX=0;
  
  }
  
  
  
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(back.x < 0){
    back.x = back.width/2;  
     }
  
  
    
    
      
   if(score%10===0&&gamestate===play){
    switch(score){
      case 10:monkey.scale=0.12;
        break;
        case 20:monkey.scale=0.14;
        break;
    case 30:monkey.scale=0.16;
        break;
     case 40:monkey.scale=0.18;
      
    }
   }  
   
 

 if(keyDown("R")&&gamestate===end){
 gamestate=play;
   score=0;
 }
     
     
  
  
  
  
  
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
   text("Score: "+ score, 300,50);
}

function spawnObstacles(){
if(frameCount%80===0){
var obstacle=createSprite(400,360,20,20);
  obstacle.addImage(obstacleimage);
  obstacle.scale=0.08;
  obstacle.velocityX=-5;
  obstacle.lifetime=150;
  obstaclesgroup.add(obstacle);
}
}
function spawnfood(){
if(frameCount%100===0){
var banana=createSprite(400,250,20,20);
 banana.addImage(bananaimage);
  banana.scale=0.08;
  banana.velocityX=-3;
  banana.lifetime=150;
  foodgroup.add(banana);
}



}











