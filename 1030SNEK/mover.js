function Mover(x, y, dx, dy, radius, clr){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.radius = radius;
  this.clr = clr;
}

Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
}

Mover.prototype.update = function(){
    if(!game.gamePaused){
      this.location.add(this.velocity);
    }
}


Mover.prototype.checkEdges = function(){
    let canvas = game.canvas;
    if (this.location.x > canvas.width || this.location.x < 0){
      this.velocity.x = -this.velocity.x;
    }
    if (this.location.y > canvas.height || this.location.y < 0){
      this.velocity.y = -this.velocity.y;
    }

  }
