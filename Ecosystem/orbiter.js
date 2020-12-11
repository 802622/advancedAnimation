function Orbiter(mover, orbiterRad, orbitRad, angle, angleVel, clr){
  this.mover = mover;
  this.radius = orbiterRad;
  this.rotator = new JSVector(orbitRad, 0);
  this.rotator.setDirection(angle);
  this.location = JSVector.addGetNew(this.mover.location, this.rotator);
  this.angleVel = angleVel;
  this.clr = clr;

  this.psystem = new ParticleSystem(this.mover.location.x, this.mover.location.y);
 }

Orbiter.prototype.update = function(){
  this.rotator.rotate(this.angleVel);
  this.location = JSVector.addGetNew(this.mover.location, this.rotator);
}


 Orbiter.prototype.render = function(){
   let ctx = game.ctx;

   this.psystem.emitloc = this.location;
   this.psystem.run();

   ctx.strokeStyle = this.clr;
   ctx.fillStyle = this.clr;
   ctx.lineWidth = 1;
   ctx.beginPath();
   ctx.arc(this.location.x, this.location.y, this.radius, Math.PI*2, 0, false);
   ctx.stroke();
   ctx.fill();

   ctx.lineCap = "round";
   ctx.lineWidth = 4;
   ctx.beginPath();
   ctx.moveTo(this.mover.location.x, this.mover.location.y);
   ctx.lineTo(this.location.x, this.location.y);
   ctx.stroke();
}