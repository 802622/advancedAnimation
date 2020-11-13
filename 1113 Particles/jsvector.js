// JSVector -- a Javascript 2D vector class
//  Arin Gadre - 9/25/2020
//  Vector Project
// The class constructor
function JSVector(x = 0,y = 0){
    this.x = x;
    this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
	var magnitude = this.getMagnitude();
	this.x = Math.cos(angle) * magnitude;
	this.y = Math.sin(angle) * magnitude;
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
	return Math.sqrt(this.x * this.x + this.y * this.y);
}

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
	var magnitude = this.getMagnitude();
	this.x = Math.cos(this.angle) * magnitude;
	this.y = Math.sin(this.angle) * magnitude;
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
	return Math.atan2(this.y, this.x);
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
	this.x += v2.x;
	this.y += v2.y;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
	this.x -= v2.x;
	this.y -= v2.y;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){
	return new JSVector(v1.x + v2.x, v1.y + v2.y);
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){
	return new JSVector(v1.x - v2.x, v1.y - v2.y);
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
	this.x *= scalar;
	this.y *= scalar;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
	this.x /= scalar;
	this.y /= scalar;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
	this.setMagnitude(1);
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){
	this.setMagnitude(lim);
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(v2){
	return Math.sqrt((v2.x - this.x) * (v2.x - this.x) + (v2.y - this.y) * (v2.y - this.y));
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){
	return (v2.x - this.x) * (v2.x - this.x) + (v2.y - this.y) * (v2.y - this.y);
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |

JSVector.prototype.rotate = function(angle) {
	var x = this.x;
	var y = this.y;
	this.x = x * Math.cos(angle) - y * Math.sin(angle);
	this.y = x * Math.sin(angle) + y * Math.cos(angle);            
}

// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){
	return(this.angle() - v2.angle());
}

// Make a copy of this vector
JSVector.prototype.copy = function(){
	return(JSVector(this.x, this.y));
}

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {
	'x: ' + this.x + ', y: ' + this.y;
}