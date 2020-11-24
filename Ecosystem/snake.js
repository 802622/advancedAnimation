function Snake(x, y, dx, dy, clr, numSegments){
    this.snakeMover = new snakeMover(x, y, dx, dy, 10, clr);
    this.clr = clr;
    this.segments = [];
    this.numSegments = numSegments;
  
    //create segments
    let d = 20;
    for(let i=0;i<this.numSegments;i++){
      this.segments[i] = new JSVector(x-d, y-d);
      d=d-20;
    }
  }
  
  Snake.prototype.run = function(){
      this.snakeMover.run();
      this.update();
      this.render();
  }
  
  
  Snake.prototype.render = function(){
      let ctx = game.ctx;
      for(var i = 0;i<this.numSegments;i++){
        ctx.strokeStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.segments[i].x, this.segments[i].y, 5, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
      }
  
    }
  
  Snake.prototype.update = function(){
      if(!game.gamePaused){
        for(let i=0;i<this.numSegments;i++){
          if(i==0){
            this.segments[i] = new JSVector(this.snakeMover.location.x, this.snakeMover.location.y);
          }
          else{
            let vB = JSVector.subGetNew(this.segments[i], this.segments[i-1]);
            vB.setMagnitude(this.segments.length);
            this.segments[i] = JSVector.addGetNew(this.segments[i-1], vB);
          }
         }
       }
  }
  