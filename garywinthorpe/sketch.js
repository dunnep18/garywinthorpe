function setup() { 
  createCanvas(600, 400);
	background(0) 
} 
function draw() { 
} 

function mouseWheel(){ 
	background(0) 
} 

function mouseDragged() { 
	noStroke(); 
	ellipse(mouseX, mouseY, 25, 25); 
}