function Game(){

    this.gamePaused = false;    
    this.ga = new GameArea();   
    
    
    this.canvas = document.getElementById('canvas');
    
    
    this.ctx = this.canvas.getContext('2d'); 

    this.movers = [];
    this.createMovers(this.canvas, 10);

    



      this.snakes = [];
      this.createSnakes(this.canvas, 6);

      this.vehicles = [];
      this.numVehicles = 100;
      for(var i=0;i<this.numVehicles;i++){
        this.vehicles.push(new Vehicle(new JSVector(Math.random()*this.canvas.width, Math.random()*this.canvas.height)));
      }

      this.vehiclesSquare = [];
      this.numVehiclesSquare = 100;
      for(var i=0;i<this.numVehiclesSquare;i++){
        this.vehiclesSquare.push(new VehicleSquare(new JSVector(Math.random()*this.canvas.width, Math.random()*this.canvas.height)));
      }
}


Game.prototype.run = function(){
  if(!this.gamePaused){
    for(let i = 0; i < this.movers.length; i++){
      this.movers[i].run();
    }
    for(let i = 0; i < this.snakes.length; i++){
      this.snakes[i].run();
    }
    for(var i=0;i<this.numVehicles;i++){
      if(this.movers[6].psystem.particles.length<15){
      let toSend = this.movers[6].location.copy();
      this.vehicles[i].find(toSend);
      }
      this.vehicles[i].run(this.vehicles);
    }
    for(var i=this.vehiclesSquare.length-1;i>=0;i--){
      this.vehiclesSquare[i].run(this.vehiclesSquare);
      if(this.vehiclesSquare[i].isDead()){
        this.vehiclesSquare.splice(i, 1);
      }
   }
   if(this.vehiclesSquare.length==0){
    for(var i=0;i<this.numVehiclesSquare;i++){
      this.vehiclesSquare.push(new VehicleSquare(new JSVector(Math.random()*this.canvas.width, Math.random()*this.canvas.height)));
    }
   }
  }
}

Game.prototype.createMovers = function(canvas, numMovers){
  for(var i = 0; i<numMovers;i++){
    var x, y, dx, dy, radius, clr, r, g, b, numOrbs;
    radius = 7;
    x = Math.random()*this.canvas.width;
    y = Math.random()*this.canvas.height;
    dx = Math.random()*2-1;
    dy = Math.random()*2-1;
    r = Math.random()*200+55;
    g = Math.random()*155;
    b = Math.random()*155;
    clr = "rgba(" + r + ", "+ g + ","+ b +")"
    numOrbs = Math.floor(Math.random() * 10) + 3;
    this.movers.push(new Mover(x, y, dx, dy, radius, clr, numOrbs));
  }
}


Game.prototype.createSnakes = function(canvas, numSnakes){
  for(var i = 0; i<numSnakes;i++){
    var x, y, dx, dy, r, g, b, clr, numSegments;
    x = Math.random()*this.canvas.width;
    y = Math.random()*this.canvas.height;
    dx = Math.random()*2-1;
    dy = Math.random()*2-1;
    r = Math.random()*200+55;
    g = Math.random()*155;
    b = Math.random()*155;
    clr = "rgba(" + r + ", "+ g + ","+ b +")"
    numSegments = 15;
    this.snakes.push(new Snake(x, y, dx, dy, clr, numSegments));
  }
}