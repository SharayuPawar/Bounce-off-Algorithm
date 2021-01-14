var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 30, 60);
  fixedRect.shapeColor="blue";
  fixedRect.debug='true';
  movingRect=createSprite(600,200,35,50);
movingRect.shapeColor='blue';
movingRect.debug='true';
movingRect.velocityX=-3;
fixedRect.velocityX=3;
}

function draw() {
 
  background(255,255,255);  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
   && fixedRect.x- movingRect.x < fixedRect.width/2 + movingRect.width/2
  ){    movingRect.velocityX=movingRect.velocityX*-1;
    fixedRect.velocityX=fixedRect.velocityX*-1;
    
  }
  
  drawSprites();
}