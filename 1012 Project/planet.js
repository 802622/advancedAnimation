class Planet {
  constructor(x, y, dx, dy, id) {
    this.clr = color(random(255), random(255), random(255));
    this.loc = createVector(x, y);
    this.id = id
      this.vel = createVector(0, 0);

    this.run = function () {
      this.checkEdges();
      this.mouseBounce();
      this.render();
    }
    this.checkEdges = function () {
      if (this.loc.x < 0) {
        this.vel.x = -this.vel.x; //left
      }
      if (this.loc.x > width) { //right
        this.vel.x = -this.vel.x;
      }
      if (this.loc.y < 0) { //down
        this.vel.y = -this.vel.y;
      }
      if (this.loc.y > height) { //up
        this.vel.y = -this.vel.y;
      }
	
  for(q=0;q<ships.length;q++){
      var dist = this.loc.dist(ships[q].loc);
      if(dist < 120){
        this.loc.x = Math.floor((Math.random() * 700) + 50);
        this.loc.y = Math.floor((Math.random() * 700) + 50);
		this.vel.x = 0;
		this.vel.y = 0;
      }
  }
	  
        if ((planet[0].loc == planet[1])||(planet[2].loc == planet[3])||(planet[1].loc == planet[2])||(planet[0].loc == planet[3])){//checks to make sure planets are not in exact same spot
          console.log("to close")
          this.loc.x = Math.floor((Math.random() * 700) + 50);
          this.loc.y = Math.floor((Math.random() * 700) + 50);
        }
    }
    this.render = function () {
		          this.vel.limit(3);
	this.loc.add(this.vel); //add velocity to make gravity
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
  }
    this.mouseBounce = function () {
if(((Math.abs(this.loc.x-mouseX))<200)||((Math.abs(this.loc.y-mouseY))<200)){
    angleMode(DEGREES);
  let a = atan2(mouseY - height / 2, mouseX - width / 2);
if((a<180)&&(a>0)){
	this.vel.y += -1;
			console.log("below")
  }
  if((a>-180)&&(a<0)){
	this.vel.y += 1;
		console.log("above")
  }
  
  if((a>-90)&&(a<90)){
	this.vel.x += -1;
	console.log("right")
  }
  if(((a<-90)&&(a>-180))||((a>90)&&(a<180))){
	this.vel.x += 1;
		console.log("left")
  }
  
}else{
if(this.vel.x>0){
this.vel.x -= 1.5;
}else{
this.vel.x=0;
}

if(this.vel.y>0){
this.vel.y -= 1.5;
}else{
this.vel.y=0;
}

console.log("slowing");
}
}
}
}