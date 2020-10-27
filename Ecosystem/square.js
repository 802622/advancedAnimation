function square(x, y, dx, dy, clr){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.attract = new JSVector(0,0);
  this.clr = clr;
  this.isOverlapping = false;
}
  
square.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

square.prototype.render = function(){
    let ctx = game.ctx;

        ctx.strokeStyle = "rgba(247, 202, 24, 1)";
        ctx.fillStyle = "rgba(247, 202, 24, 1)";

        ctx.save();
        ctx.beginPath();
        ctx.translate(this.location.x, this.location.y);
        ctx.rotate(this.velocity.getDirection());
        ctx.moveTo(-8, -8);
        ctx.lineTo(8, -8);
        ctx.lineTo(8, 8);
        ctx.lineTo(-8, 8);
        ctx.lineTo(-8, -8);
        ctx.stroke();
        ctx.fill();
        ctx.restore();
  }


square.prototype.update = function(){
  let h = game.triangles;
  let b = game.squares;
  for(let i = 0; i<b.length;i++){
    for(let j = 0; j<h.length;j++){
      let d = b[i].location.distance(h[j].location);
      if(d<100){
        this.attract = JSVector.subGetNew(h[j].location, b[i].location);
        this.attract.normalize();
        this.attract.multiply(0.05);
      }
    }
  }

  if(!game.gamePaused){
    this.velocity.add(this.attract);
    this.velocity.limit(3);
    this.location.add(this.velocity);
  }
}


square.prototype.checkEdges = function(){
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
