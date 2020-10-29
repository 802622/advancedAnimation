function triangle(x, y, dx, dy, clr){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.clr = clr;
  this.isOverlapping = false;
}
  
triangle.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }


triangle.prototype.render = function(){
    let ctx = game.ctx;

        ctx.strokeStyle = "rgba(240, 52, 52, 1)";
        ctx.fillStyle = "rgba(240, 52, 52, 1)";

        ctx.save();
        ctx.translate(this.location.x, this.location.y);


        ctx.beginPath();
        ctx.moveTo(0, -16);
        ctx.lineTo(0, 16);
        ctx.lineTo(16, 0);
        ctx.lineTo(0, -16);
        ctx.fill();
        ctx.restore();
  }


triangle.prototype.update = function(){
    if(!game.gamePaused){
        this.location.add(this.velocity);
    }
}


triangle.prototype.checkEdges = function(){
    let canvas = game.canvas;
    if (this.location.x > canvas.width){
      this.location.x = 0;
    }
    else if(this.location.x < 0){
      this.location.x = canvas.width;
    }
    if (this.location.y > canvas.height){
      this.location.y = 0;
    }
    else if(this.location.y < 0){
      this.location.y = canvas.height;
    }

  }
