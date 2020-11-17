
var game;   // global game object

window.onload = init;//  only start once window loaded to stop issues

var background = new Image();
background.src = "backgroundSnow.jpg";

function init(){
    game = new Game();
    animate();
}

function animate(){
  game.ctx.drawImage(background,0,0,background.width,background.height,0,0,canvas.width,canvas.height); 
  game.run();    // run the game
  requestAnimationFrame(animate);
}
