function setup() {
  
  let canvas1 = createCanvas(600, 200);
  canvas1.parent('canvas1');
  // background(255, 255, 255, 0);
  fill(255);
  strokeWeight(2);
  rectMode(CENTER);
  rect(width/2, height/2, 600, 200)
  noStroke();
}

function draw() {
  if (mouseIsPressed === true) {
    fill(220, 70, 90);
  circle(mouseX, mouseY, mouseX*mouseY/width);
  }
}

function mousePressed(){
  fill(180, 100, 100);
  circle(mouseX, mouseY, mouseX*mouseY/width);
  
}