
var bird;
var pipes = [];
var score = 0;
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(51, 204, 255, 75);
new Audio('https://www.bensound.com/royalty-free-music?download=epic').play()
}
function draw() {
  background(255);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	fill(random(255));
      textSize(70);
  		stroke(15);
      text(score, 200, 55);
}
function mousePressed() {
  if (mousePressed) {
    bird.up(); 
    if(bird.lift) 
    {
    
    
    score +=1; }
    //console.log("SPACE");
  }
}

function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 1;
  this.lift = -35;
  this.velocity = 0.25;

  this.show = function() {
   strokeWeight(1);
	fill(255, 0, 255);
	
	
	//head
	ellipse(this.x, this.y, 90,90);
	
	//eyes 
	fill(1000)
	ellipse(this.x+25, this.y-10, 25,35);
	
	ellipse(this.x, this.y-10, 25,35);
  ellipse(this.x, this.y+20, 55,25);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 60;
  this.speed = 3;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(50, 255, 70);
    
      rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
   if (this.highlight)
   {
     
      fill(255);
     rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
       background(0)  	
   fill(255);
      textSize(60);
      text("GAME OVER", 26, 300);
   this.speed = 0;
   bird.lift = 0; 
   }
    
    
  }
  

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}