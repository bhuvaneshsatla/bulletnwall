var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);
  
  thickness = Math.round(random(22, 83));

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = rgb(80, 80, 80);
  //wall.debug = true;

  bullet = createSprite(400, 200, 80, 30);
  bullet.shapeColor = rgb(0, 0, 255);
  bullet.velocityX = 80;
  //bullet.debug = true;

  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));

}

function draw() {
  background("black"); 

  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;

    var damage = (0.5 * weight * (speed ^ 2)) / (thickness ^ 3);

    if(damage > 10) {
      bullet.shapeColor = rgb(255, 0, 0);
    } else if(damage < 10) {
      bullet.shapeColor = rgb(0, 255, 0);
    }

  }

  drawSprites();
}

function hasCollided(object1, object2) {
  bulletRightEdge = object1.x + (object1.width / 2);
  wallLeftEdge = object2.x - (object2.width / 2);

  if(bulletRightEdge >= wallLeftEdge) {
    return true;
  }

  return false;

}