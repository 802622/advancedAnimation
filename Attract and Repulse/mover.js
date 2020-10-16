//  Mover constructor function +++++++++++++++++++++++++++++
var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

function Mover(x, y, dx, dy, rad, clr){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.pulser= new JSVector(0, 0);
  this.rad = rad;
  this.clr = clr;
  this.isOverlapping = false;
}
  //  placing methods in the prototype (every mover shares functions)
Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }


// draw the mover on the canvas
Mover.prototype.render = function(){
    let ctx = game.ctx;
    let b = game.movers;

        if(this == b[0]){
          ctx.strokeStyle = "rgba(0, 0, 0, 0)";
          ctx.fillStyle = "rgba(0, 0, 0, 0)";
        }
        else{
          ctx.strokeStyle = randomColor;//this.clr;
          ctx.fillStyle = randomColor;
          //ctx.strokeStyle = "rgba(255, 255, 255, 255)";
          //ctx.fillStyle = this.clr;
        }
        ctx.beginPath();
        ctx.arc(this.location.x,this.location.y, this.rad, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
        // ctx.save();
        // ctx.beginPath();
        // ctx.translate(this.location.x, this.location.y);
        // ctx.rotate(this.velocity.getDirection());
        // ctx.moveTo(20, 0);
        // ctx.lineTo(-20, -10);
        // ctx.lineTo(-20, 10);
        // ctx.closePath();
        // ctx.stroke();
        // ctx.fill();
        // ctx.restore();
  }

// Move the mover in a random direction
Mover.prototype.update = function(){
  let b=game.movers;
  if(this !== b[0]){
      let d = this.location.distance(b[0].location);

    if(d<200){//repell
          this.pulser = JSVector.subGetNew(this.location, b[0].location);
          this.pulser.normalize();
          this.pulser.multiply(0.1);
    }

    if(d>100){//attract
        this.pulser = JSVector.subGetNew(b[0].location, this.location);
        this.pulser.normalize();
        this.pulser.multiply(0.1);
    }
  }
    if(!game.gamePaused){
      if(this !== b[0]){
        this.velocity.add(this.pulser);
        this.velocity.limit(3);
        this.location.add(this.velocity);
      }
    }
}

// When a mover hits an edge of the canvas, it wraps around to the opposite edge.
Mover.prototype.checkEdges = function(){
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
