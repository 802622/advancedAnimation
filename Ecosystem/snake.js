function Snake(x, y, dx, dy, clr, numSegments){
    this.snakeMover = new snakeMover(x, y, dx, dy, 10, clr);
    this.clr = clr;
    this.segments = [];
    this.numSegments = numSegments;
    this.framesElapsed = 0;
    //create segments
    this.d = 20;
    for(let i=0;i<this.numSegments;i++){
      this.segments[i] = new JSVector(x-this.d, y-this.d);
      this.d=this.d-20;
    }
  }
  
  Snake.prototype.run = function(){
      this.snakeMover.run();
      this.update();
      this.render();
  }
  
  
  Snake.prototype.render = function(){
    this.framesElapsed++;
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
       if(Math.random() < 0.5&&this.framesElapsed==100){
        this.segments[this.segments.length+1] = new JSVector(this.snakeMover.x-this.d, this.snakeMover.y-this.d);
        this.d=this.d-20;
        console.log("newSnekBit");
        this.framesElapsed = 0;
       }else if(Math.random() > 0.5&&this.framesElapsed==100){
        console.log("removed  SnekBit");
        this.segments.splice(this.segments.length, 1);
        this.framesElapsed = 0;
       }
  }
  