function setup() {
  
  let canvas2 = createCanvas (600, 200);
  // canvas.parent('sketch-container');
  canvas2.parent('canvas2');
} 
  
function draw() {
  background(120);
  fill(100, 150, 200)
  circle(mouseX, mouseY, mouseX*mouseY/width);
}