function ParticleSystem(x, y){
  this.particles = [];
  this.emitloc = new JSVector(x, y);
}

ParticleSystem.prototype.run = function(){
  this.addParticle();
  this.update();
}

ParticleSystem.prototype.addParticle = function(){
  let clr = "white";
  this.particles.push(new Particle(this.emitloc.x, this.emitloc.y, 5, clr));
}

ParticleSystem.prototype.update = function(){
  for(var i = this.particles.length-1;i>=0;i--){
    let p = this.particles[i];
    p.run();
    if(p.isDead()){
      this.particles.splice(i, 1);
    }
  }
}
