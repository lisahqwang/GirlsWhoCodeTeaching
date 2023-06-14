/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400, 400); 

  //sets the background color
  background(244,204,204);
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //Face
  fill(253, 242, 230);
  ellipse(width/2, height/2, 175, 200);

  //Eyes
  if (mouseIsPressed) {
    //Eyes closed
    fill(0);
    ellipse(170, 170, eyeWidth, eyeHeight/8); 
    ellipse(230, 170, eyeWidth, eyeHeight/8); 
  } else {
    //Eyes open
    fill('#7f6000ff');
    ellipse(170, 170, eyeWidth, eyeHeight); 
    ellipse(230, 170, eyeWidth, eyeHeight);
    fill(0);
    ellipse(170, 170, pupilWidth, pupilHeight); 
    ellipse(230, 170, pupilWidth, pupilHeight);
  } 

  //Mouth
  fill('#ea9999ff');
  arc(200,230,50,50,0,180);

  //Text 
  fill(0);
  textSize(15);
  text('We will customize this \ntext later on in the \nproject to reflect your avatar.', 20,20);

  //Directions for mouse press
  fill(0);
  textSize(15);
  text('Click to see \nme blink.', 300,350);
}


