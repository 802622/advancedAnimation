// JSVector -- a Javascript 2D vector class
//  Nayan Smuek
//  9/25-VectorLab
// The class constructor
function JSVector(x = 0,y = 0){
        this.x = x;
        this.y = y;
}

JSVector.prototype.setMagnitude = function(mag){
  var dir = this.getDirection();
  this.x = mag * Math.cos(dir);
  this.y = mag * Math.sin(dir);
}


JSVector.prototype.getMagnitude = function(){
  return(Math.sqrt(this.x*this.x+this.y*this.y));
}



JSVector.prototype.setDirection = function(angle){
  var mag = this.getMagnitude();
  this.x = Math.cos(angle) * mag;
  this.y = Math.sin(angle) * mag;
}


JSVector.prototype.getDirection = function(){
  return(Math.atan2(this.y,this.x));
}


JSVector.prototype.add = function(v2){
  this.x = this.x + v2.x;
  this.y = this.y + v2.y;
}


JSVector.prototype.sub = function(v2){
  this.x = this.x - v2.x;
  this.y = this.y - v2.y;
}


JSVector.addGetNew = function(v1,v2){
  return(new JSVector(v1.x + v2.x, v1.y + v2.y));
}


JSVector.subGetNew = function(v1,v2){
  return(new JSVector(v1.x - v2.x, v1.y - v2.y));
}


JSVector.prototype.multiply = function(scalar){
  this.x = this.x*scalar;
  this.y = this.y*scalar;
}


JSVector.prototype.divide = function(scalar){
  this.x = this.x/scalar;
  this.y = this.y/scalar;
}


JSVector.prototype.normalize = function(){
  this.setMagnitude(1);
}


JSVector.prototype.limit = function(lim){
  if(this.getMagnitude()>lim){
    this.setMagnitude(lim);
  }
}


JSVector.prototype.distance = function(v2){
  return(Math.sqrt((v2.x-this.x)*(v2.x-this.x) + (v2.y-this.y)*(v2.y-this.y)));
}


JSVector.prototype.distanceSquared = function(v2){
  return((v2.x-this.x)*(v2.x-this.x) + (v2.y-this.y)*(v2.y-this.y));
}





JSVector.prototype.rotate = function(angle) {
  let x = this.x, y = this.y;
  let cos = Math.cos(angle);
  let sin = Math.sin(angle);
  this.x = x*cos - y*sin;
  this.y = x*sin + y*cos;
}


JSVector.prototype.angleBetween = function(v2){
  return(Math.abs(this.getDirection()-v2.getDirection()));
}


JSVector.prototype.copy = function(){
  return(new JSVector(this.x, this.y));
}


JSVector.prototype.toString = function() {
  let x = this.x.toFixed(2);
  let y = this.y.toFixed(2);
  let mag = this.getMagnitude().toFixed(2);
  let dir = this.getDirection().toFixed(2);
  return("x: " + x + "y: " + y + "mag: " + mag + "dir: " + dir);
}
