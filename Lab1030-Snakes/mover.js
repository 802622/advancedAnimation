function Mover(x, y, dx, dy, radius, clr){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.radius = radius;
  this.clr = clr;
}

Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
    //this.render();
}


// draw the bubble on the canvas
// Mover.prototype.render = function(){
//     let ctx = game.ctx;
//
//     ctx.strokeStyle = this.clr;
//     ctx.fillStyle = this.clr;
//     ctx.beginPath();
//     ctx.arc(this.location.x,this.location.y, this.radius, Math.PI*2, 0, false);
//     ctx.stroke();
//     ctx.fill();
//   }

// Move the bubble in a random direction
Mover.prototype.update = function(){
    if(!game.gamePaused){
      this.location.add(this.velocity);
    }
}

// When a bubble hits an edge of the canvas, it wraps around to the opposite edge.
Mover.prototype.checkEdges = function(){
    let canvas = game.canvas;
    if (this.location.x > canvas.width || this.location.x < 0){
      this.velocity.x = -this.velocity.x;
    }
    if (this.location.y > canvas.height || this.location.y < 0){
      this.velocity.y = -this.velocity.y;
    }

  }
