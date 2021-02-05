class Actor{
constructor(){
  this.loc = new JSVector(ecoSystem.cells[0][0].loc.x + ecoSystem.cellWidth/2, ecoSystem.cells[0][0].loc.y + ecoSystem.cellHeight/2+5);
  this.vel = new JSVector(0, 0);
  this.currentCell = ecoSystem.cells[0][0];
  this.clr = "blue";


  // add an event handler such that the a, s, w, d keys
  // will move the actor from cell to cell
  window.addEventListener("keypress", function (event) {
    let actor = ecoSystem.actor;
      switch (event.code) {
          case "KeyW":
              if (actor.currentCell.neighbors.n != null){
                console.log(actor.vel.getDirection());
                  actor.loc.y-=ecoSystem.cellHeight;
                  actor.currentCell = ecoSystem.cells[actor.currentCell.row-1][actor.currentCell.col];
                }
              break;
          case "KeyS":
              if (actor.currentCell.neighbors.s != null){
                console.log(actor.vel.getDirection());
                  actor.loc.y+=ecoSystem.cellHeight;
                  actor.currentCell = ecoSystem.cells[actor.currentCell.row+1][actor.currentCell.col];
                }
              break;
          case "KeyA":
              if (actor.currentCell.neighbors.w != null){
                console.log(actor.vel.getDirection());
                  actor.loc.x-=ecoSystem.cellWidth;
                  actor.currentCell = ecoSystem.cells[actor.currentCell.row][actor.currentCell.col-1];
                }
              break;
          case "KeyD":
              if (actor.currentCell.neighbors.e != null){
                  actor.loc.x+=ecoSystem.cellWidth;
                  actor.currentCell = ecoSystem.cells[actor.currentCell.row][actor.currentCell.col+1];
                }
              break;
      }
  }, false);
}//end constructor

run(){
  this.render();
}

render(){
  let ctx = ecoSystem.context1;
  ctx.save();
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.translate(this.loc.x, this.loc.y);
  ctx.arc(0, 0, 20, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

}
}
