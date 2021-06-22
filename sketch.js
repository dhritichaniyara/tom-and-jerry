
var bg;
var cat,mouse;
var cat1,cat2,cat3,cat4;
var mouse1,mouse2,mouse3,mouse4;
var tom,jerry;
var x;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    cat1 = loadImage("images/cat1.png");
    cat2 = loadImage("images/cat2.png");
    cat3 = loadImage("images/cat3.png");
    cat4 = loadImage("images/cat4.png");
    mouse1 = loadImage("images/mouse1.png");
    mouse2 = loadImage("images/mouse2.png");
    mouse3 = loadImage("images/mouse3.png");
    mouse4 = loadImage("images/mouse4.png");
    cat = loadAnimation(cat2,cat3);
    mouse = loadAnimation(mouse2,mouse3);

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(900,700);
    tom.addImage(cat1);
    tom.scale = 0.1;
    jerry = createSprite(500,700);
    jerry.addImage(mouse1);
    jerry.scale = 0.1;
    

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x <(tom.width-jerry.width)/2){
        tom.addAnimation("happycat",cat3);
        tom.changeAnimation("happycat");
        jerry.addAnimation("happymouse",mouse3);
        jerry.changeAnimation("happymouse");
        tom.velocityX = 0;

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW")){
      jerry.addAnimation("teasing",mouse2);
      jerry.changeAnimation("teasing");
      tom.addAnimation("moving",cat2);
      tom.changeAnimation("moving");
      tom.velocityX = -1;
  }
}
