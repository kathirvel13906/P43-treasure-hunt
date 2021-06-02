var bg, bg2, form, system, code, security, treasurebg;
var score=0;

function preload() {
  bg= loadImage("aladdin_cave.jpg");
  treasurebg = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg);
  
  clues();
  security.display();

  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(treasurebg);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}