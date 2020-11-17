function Game(){

    this.gamePaused = false; 
    this.ga = new GameArea();
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d'); 

    //create particle system
    let x = this.canvas.width/2;
    let y = this.canvas.height/4;
    this.psystem = new ParticleSystem(x, y);
}

Game.prototype.run = function(){
  if(!this.gamePaused){
    this.psystem.run();
  }
}
