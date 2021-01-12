function Mover(x, y, dx, dy, radius, clr, numOrbs){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.acceleration = new JSVector(0, 0);
  this.radius = radius;
  this.orbitAngle = Math.random()*Math.PI;
  this.clr = clr;
  this.orbiters = [];

  this.psystem = new ParticleSystem(this.location.x, this.location.y);

  
   for(let i = 0; i<numOrbs; i++){
     let a = i*(Math.PI*2)/numOrbs + this.orbitAngle;
     let angleVel = numOrbs*0.01;
     this.orbiters.push(new Orbiter(this, 4, 25, a, angleVel, this.clr));
   }
}

Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();

    
    for(let i=0; i<this.orbiters.length;i++){
      let orb = this.orbiters[i];
      orb.update();
      orb.render();
    }

}



Mover.prototype.render = function(){
    let ctx = game.ctx;
    let b = game.movers;

    this.psystem.emitloc = this.location;
    this.psystem.run();

        ctx.strokeStyle = this.clr;
        ctx.fillStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.location.x,this.location.y, this.radius, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
  }


Mover.prototype.update = function(){
    if(!game.gamePaused){
      this.velocity.add(this.acceleration);
      this.velocity.limit(3);
      this.location.add(this.velocity);
    }
}


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
