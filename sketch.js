var guns
var score
var PLAY
var END
var gameState = PLAY
function preload(){
  gb = loadImage("goodboy1.png")
  bd = loadImage("badboy1.png")
  gun = loadImage("Gun1.png")
  gold = loadImage("gold.png")
  bulleti = loadImage("bullet.png")
  backgroundi = loadImage("war.png")
}


function setup() {
  createCanvas(400, 400);

  
  guns = createSprite(30,200,10,10)

  guns.addImage(gun);
  guns.scale = 0.05
  bulletgroup = new Group();
  goodgroup = new Group();
  badgroup = new Group();

  score = 0
}

function draw() {
  background(0,255,0);


 if (keyWentDown("RIGHT_ARROW")){
   bulletf();
 }
  if (frameCount%Math.round(random(50,100)) == 0){
    goodboy();
  }
  
  if (frameCount%Math.round(random(100,200)) == 0){
    badboy();
  }

  if (bulletgroup.isTouching(goodgroup)){
    score = score -1
    bulletgroup.destroyEach();
    goodgroup.destroyEach();
  }

  if (badgroup.isTouching(guns)){
    score = score-0.1
  }

  if (bulletgroup.isTouching(badgroup)){
    score = score +1
    bulletgroup.destroyEach();
    badgroup.destroyEach();
  }

  if (score === -1&&gameState == PLAY){
    gameState = END
    guns.destroy();
    badgroup.destroyEach();
    goodgroup.destroyEach();
    bulletgroup.destroyEach();
    textSize(25)
    stroke("black")
    text("GAME OVER",200,200)
  }
  textSize(10)
  stroke("red")
  text("score:"+Math.round(score),200,20)
    guns.y = mouseY
  drawSprites();


}

function bulletf(){
  var bullet = createSprite(10,guns.y,20,200)
  bullet.addImage(bulleti)
  bullet.scale = 0.05
  bullet.velocityX = 10
  bullet.lifetime = 40
  bulletgroup.add(bullet);
}

function goodboy(){
  var goodb = createSprite(410,Math.round(random(10,390)),10,10)
  goodb.addImage(gb)
  goodb.scale = 0.3
  goodb.velocityX = -10
  goodb.lifetime = 40
  goodgroup.add(goodb)
}

function badboy(){
  var badb = createSprite(410,Math.round(random(10,390)),10,10)
  badb.addImage(bd)
  badb.scale = 0.3
  badb.velocityX = -10
  badb.lifetime = 40
  badgroup.add(badb)

}





