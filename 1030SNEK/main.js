
var game;   // a single global game object

window.onload = init;

function init(){
    game = new Game();
    animate();
}

function animate(){
  game.ctx.fillStyle = 'rgba(0,0,0,.05)'
  game.ctx.fillRect(0,0,game.canvas.width,game.canvas.height);
  game.run();    // run the game
  requestAnimationFrame(animate);
}
