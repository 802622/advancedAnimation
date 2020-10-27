function Game(){

    this.gamePaused = false;    
    this.ga = new GameArea();   
    
    
    this.canvas = document.getElementById('canvas');
    
    
    this.ctx = this.canvas.getContext('2d'); 

    this.movers = [];
    this.createMovers(this.canvas, 10);

    
    this.squares = [];
    let numsquares = 10;
    for(var i = 0; i < numsquares; i++){
        var x, y, dx, dy, clr, r, g, b;
        x = Math.random()*this.canvas.width;
        y = Math.random()*this.canvas.height;
        dx = Math.random()*6-3;
        dy = Math.random()*6-3;
        r = 255;
        g = 255;
        b = 255;
        clr = "rgba(" + r + ", "+ g + ","+ b +")"
        this.squares.push(new square(x, y, dx, dy, clr));
    }

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


}


Game.prototype.run = function(){
  if(!this.gamePaused){
    for(let i = 0; i < this.squares.length; i++){
      this.squares[i].run();
    }
     for(let i = 0; i < this.triangles.length; i++){
     this.triangles[i].run();
    }
    for(let i = 0; i < this.movers.length; i++){
      this.movers[i].run();
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
