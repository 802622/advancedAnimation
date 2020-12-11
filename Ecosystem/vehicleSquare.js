function VehicleSquare(location){
  this.location = new JSVector(location.x, location.y);
  let dx = Math.random()*4-2;
  let dy = Math.random()*4-2;
  this.velocity = new JSVector(dx, dy);
  this.acceleration = new JSVector(0,0);
  this.desiredSep = 20; //desired separation between vehicles
  this.neighborDist = 100;
  this.maxSpeed = 1;
  this.maxForce = 1.5;
}

VehicleSquare.prototype.run = function(vehicles){
  this.flock(vehicles);
  this.update();
  this.checkEdges();
  this.render();
}

VehicleSquare.prototype.render = function(){
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

VehicleSquare.prototype.update = function(){
  if(!game.gamePaused){
    this.velocity.add(this.acceleration);
    this.velocity.limit(1.5);
    this.location.add(this.velocity);

  }

}

VehicleSquare.prototype.checkEdges = function(){
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

  VehicleSquare.prototype.flock = function(vehicles){
  //flock force is the accumulation of all forces
  let flockForce = new JSVector(0, 0);
  //set up force vectors to be added to acceleration
  let sep = this.separate(vehicles);
  let ali = this.align(vehicles);
  let coh = this.cohesion(vehicles);
  let sepMult = 0.05;
  let aliMult = 0.05;
  let cohMult = 0.01;
  //calculate 3 forces
  sep.multiply(sepMult);
  ali.multiply(aliMult);
  coh.multiply(cohMult);
  //add forces to flockForce
  flockForce.add(sep);
  flockForce.add(ali);
  flockForce.add(coh);
  let maxForce = 1;
  flockForce.limit(maxForce);//limiting by maxForce
  this.acceleration.add(flockForce);
}

VehicleSquare.prototype.separate = function(vehicles){
  let sepForce = new JSVector(0,0);
  for(var i=0; i<vehicles.length;i++){
    let diff = JSVector.subGetNew(this.location, vehicles[i].location);
    let d = diff.getMagnitude();
    if((d>0) && (d<this.desiredSep)){
        diff.normalize();
        sepForce.add(diff);
    }
  }
  return sepForce;
}

VehicleSquare.prototype.align = function(vehicles){
  let sum = new JSVector(0,0);
  let count = 0;
  for(var i=0; i<vehicles.length;i++){
    let d = this.location.distance(vehicles[i].location);
    if((d>0) && (d<this.neighborDist)){
      sum.add(vehicles[i].velocity);
      count++;//keep track of number of vehicles within distance
    }
  }
  if(count>0){
    sum.divide(count);
    sum.normalize();
    sum.multiply(1.5);//maxSpeed
    let steer = sum.sub(this.velocity);
    steer.limit(1);//maxForce
    return steer;
  }
  else{
    return new JSVector(0,0);
  }
}

VehicleSquare.prototype.cohesion = function(vehicles){
  let sum = new JSVector(0,0);
  let count = 0;
  for(var i=0; i<vehicles.length;i++){
    let d = this.location.distance(vehicles[i].location);
    if((d>0) && (d<this.neighborDist)){
      sum.add(vehicles[i].location);
      count++;//keep track of number of vehicles within distance
    }
  }
  if(count>0){
    sum.divide(count);
    return this.seek(sum);
  }
  else{
    return new JSVector(0,0);
  }
}

VehicleSquare.prototype.seek = function(target){
  let desired = target.sub(this.location);
  desired.normalize();
  desired.multiply(1.5);
  let steer = desired.sub(this.velocity);
  steer.limit(1);
  return steer;
}
