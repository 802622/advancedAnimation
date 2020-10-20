function Game(){

    this.gamePaused = false;    // the game may be paused or not
    this.ga = new GameArea();
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d'); // This is the context

    //   create the array of bubble objects
    this.balls = [];
    let numBalls = 10;
    for(var i = 0; i < numBalls; i++){
        this.balls.push(new Oscillator());
    }


}

// function to run the game each animation cycle
Game.prototype.run = function(){
  if(!this.gamePaused){
    for(let i = 0; i < this.balls.length; i++){
      this.balls[i].run();
    }
  }
}
