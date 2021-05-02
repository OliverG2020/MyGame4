var ninja,ninjaimage,bgimg1,ground,healthbarimage1,healthbarimage2,healthbarimage3,healthbarimage4;
var obstaclecouresimage,healthbar, groundimg, trollsgroup,dragongroup;
var gameover , restart, gameoverimage, restartimage;


function preload(){
ninjaimage=loadAnimation("Images/Ninja1.png","Images/Ninja2.png","Images/Ninja3.png","Images/Ninja4.png","Images/Ninja5.png","Images/Ninja6.png","Images/Ninja sword1.png","Images/Ninja sword2.png","Images/Ninja sword3.png","Images/Ninja sword4.png","Images/Ninja sword5.png")

healthbarimage1=loadImage("Images/Healthbar1.png")
healthbarimage2=loadImage("Images/Healthbar2.png")
healthbarimage3=loadImage("Images/Healthbar3.png")
healthbarimage4=loadImage("Images/Healthbar4.png")

obstaclecouresimage=loadImage("Images/obstacle coures 1.jpg","Images/obstacle coures 2.jpg","Images/obstacle coures 3.jpg")

bgimg1=loadImage("Images/Fantasy Forest.jpg");
groundimg=loadAnimation("Images/grass-ground.png", "Images/grass-ground.png","Images/grass-ground.png","Images/grass-ground.png")

dragongroup=loadImage("Images/Dragon Obstacle.jpg","Images/Dragon Obstacle2.jpg","Images/Dragon Obstacle3.jpg","Images/Dragon Obstacle4.jpg")
trollsgroup=loadImage("Images/Troll Obstacle.jpg")





gameoverimage=loadImage("Images/Game Over.png")
restartimage=loadImage("Images/Restart button.png")
}

function setup(){
createCanvas(1500,500);

//ground
ground=createSprite(-10,760,1500,10);
ground.addAnimation("grass ground", groundimg);
ground.scale = 6;
//ground.debug=true;
ground.setCollider("rectangle",0,0,ground.width,90)

//ninja
ninja=createSprite(100,350);
ninja.addAnimation("ninja",ninjaimage)
ninja.scale = 0.5;

//health bar
healthbar=createSprite(1000,50);
healthbar.addImage("health",healthbarimage1);
healthbar.scale = 0.4;



//gameover
gameover=createSprite(300,100)
gameover.addimage("gameover",gameoverimage);
gameover.scale = 0.7;



//restart
restart=createSprite(330,120)
restart.addimage("restart",restartimage);
restart.scale = 0.3;


//group
trollsgroup = new Group();
dragongroup = new Group();





}

function draw(){
background(bgimg1);

fill("white");
stroke("yellow")
textSize(18);
text("x:" + mouseX + "," + "y:"+ mouseY, mouseX, mouseY);

spawntrolls();
spawnDragons();

ground.visble=false
ground.velocityX=-3;
//infinite ground
if(ground.x<0){
  ground.x=ground.width/2
}

if(keyDown(UP_ARROW) && ninja.y>230){
  ninja.velocityY = -7;
}

//gravity
ninja.velocityY=ninja.velocityY+1;

ninja.collide(ground);

if(trollsgroup.isTouching(ninja) || dragongroup.isTouching(ninja)){
   gameState=END;
   ninja.changeImage("Ninja die2.png",ninjaimage)

}
else if ( gamee=State==END){ 
  gameover.visbile=true; 
  restart.visble=true; 
  ninja.changeImage("ninjaImage",ninjaImage)




}
   

    if(mousePressedOver(restart)){
      reset();
    }



drawSprites()

}

function spawntrolls(){
  if(frameCount % 80 === 0){

    var trolls = createSprite(1500,400,10,100);
    trolls.shapeColor = "yellow";
    trolls.velocityX=-6;
    trolls.lifetime = 300;
    trollsgroup.add(trolls);

  }
}

function spawnDragons(){
  if(frameCount % 60 === 0){

    var dragon = createSprite(1500,Math.round(random(40, 240)),50,10);
    dragon.shapeColor = "white";
    dragon.velocityX=-6;
    dragon.lifetime = 300;
    dragongroup.add(dragon);

  }


  function reset(){
    gameState=PLAY;
gameOver.visible=false;
restart.visible=false;
ninja.changeAnimation("ninja",ninjaimage);
  obstaclesGroup.destroyEach();
  score=0;
  trollsgroup.x=50;

  }
}