function Particle(x, y, rad, clr){
  this.location = new JSVector(x, y);//initialize location at emitter location
  this.velocity = new JSVector(Math.random()*2-1, Math.random()*2-2);
  this.acceleration = new JSVector(0, 0.05);
  this.lifespan = 200;
  this.radius = rad;
  this.clr = clr;
}

Particle.prototype.run = function(){
  this.update();
  this.render();
}

Particle.prototype.render = function(){
  let ctx = game.ctx;
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.lifespan--;
}

Particle.prototype.isDead = function(){
  if(this.lifespan<0){
    return true;
  }
  else{
    return false;
  }
}
