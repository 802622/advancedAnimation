function Game(){

    this.gamePaused = false;    
    this.ga = new GameArea();   
    
    
    this.canvas = document.getElementById('canvas');
    
    
    this.ctx = this.canvas.getContext('2d'); 

    this.movers = [];
    this.createMovers(this.canvas, 10);

    this.psystem = new ParticleSystem(this.canvas.width/2, this.canvas.height/4);


    this.triangles = [];
    let numtriangles = 4;
    for(var i = 0; i < numtriangles; i++){
        var x, y, dx, dy, clr, r, g, b;
        x = Math.random()*this.canvas.width;
        y = Math.random()*this.canvas.height;
        dx = Math.random()*6-3;
        dy = Math.random()*6-3;
        r = 255;
        g = 255;
        b = 255;
        clr = "rgba(" + r + ", "+ g + ","+ b +")"
        this.triangles.push(new triangle(x, y, dx, dy, clr));
      }

      this.snakes = [];
      this.createSnakes(this.canvas, 6);

      this.vehicles = [];
      this.numVehicles = 100;
      for(var i=0;i<this.numVehicles;i++){
        this.vehicles.push(new Vehicle(new JSVector(Math.random()*this.canvas.width, Math.random()*this.canvas.height)));
      }

      this.vehiclesSquare = [];
      this.numVehicles = 100;
      for(var i=0;i<this.numVehicles;i++){
        this.vehiclesSquare.push(new VehicleSquare(new JSVector(Math.random()*this.canvas.width, Math.random()*this.canvas.height)));
      }
}


Game.prototype.run = function(){
  if(!this.gamePaused){
     for(let i = 0; i < this.triangles.length; i++){
     this.triangles[i].run();
    }
    for(let i = 0; i < this.movers.length; i++){
      this.movers[i].run();
    }
    for(let i = 0; i < this.snakes.length; i++){
      this.snakes[i].run();
    }
    for(var i=0;i<this.numVehicles;i++){
       this.vehicles[i].run(this.vehicles);
    }
    for(var i=0;i<this.numVehicles;i++){
      this.vehiclesSquare[i].run(this.vehiclesSquare);
   }
   this.psystem.run();
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