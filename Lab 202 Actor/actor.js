class Actor{
constructor(){
  this.loc = new JSVector(ecoSystem.cells[0][0].loc.x + ecoSystem.cellWidth/2, ecoSystem.cells[0][0].loc.y + ecoSystem.cellHeight/2+5);
  this.vel = new JSVector(0, 0);
  this.currentCell = ecoSystem.cells[0][0];
  this.clr = "blue";
  this.rotateClock = false;
  this.rotateCC = false;
  this.rotate180 = false;


  // add an event handler such that the a, s, w, d keys
  // will move the actor from cell to cell
  window.addEventListener("keypress", function (event) {
    let actor = ecoSystem.actor;
      switch (event.code) {
          case "KeyW":
              if (actor.currentCell.neighbors.n != null){
                  actor.loc.y-=ecoSystem.cellHeight;
                  actor.currentCell = ecoSystem.cells[actor.currentCell.row-1][actor.currentCell.col];
                  if(actor.vel.getDirection()==0*Math.PI/180){
                    actor.rotateCC = true;
                  }
                  else if(actor.vel.getDirection()==180*Math.PI/180){
                    actor.rotateClock = true;
                  }
                  else if(actor.vel.getDirection()==270*Math.PI/180){
                    actor.rotate180 = true;
                  }
                }
              break;
          case "KeyS":
              if (actor.currentCell.neighbors.s != null){
                  actor.loc.y+=ecoSystem.cellHeight;
                  actor.currentCell = ecoSystem.cells[actor.currentCell.row+1][actor.currentCell.col];
                  if(actor.vel.getDirection()==0*Math.PI/180){
                    actor.rotateClock = true;
                  }
                  else if(actor.vel.getDirection()==180*Math.PI/180){
                    actor.rotateCC = true;
                  }
                  else if(actor.vel.getDirection()==90*Math.PI/180){
                    actor.rotate180 = true;
                  }
                }
              break;
          case "KeyA":
              if (actor.currentCell.neighbors.w != null){
                  actor.loc.x-=ecoSystem.cellWidth;
                  actor.currentCell = ecoSystem.cells[actor.currentCell.row][actor.currentCell.col-1];
                  if(actor.vel.getDirection()!=180*Math.PI/180){
                    actor.vel.setDirection(180*Math.PI/180);
                    actor.rotate = true;
                  }
                }
              break;
          case "KeyD":
              if (actor.currentCell.neighbors.e != null){
                  actor.loc.x+=ecoSystem.cellWidth;
                  actor.currentCell = ecoSystem.cells[actor.currentCell.row][actor.currentCell.col+1];
                  if(actor.vel.getDirection()!=0*Math.PI/180){
                    actor.vel.setDirection(0*Math.PI/180);
                    actor.rotate = true;
                  }
                }
              break;
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
  if(this.rotate){
    ctx.rotate(this.vel.getDirection());
  }
  ctx.moveTo(-5*4, -10*4);
  ctx.lineTo(0, -7*4);
  ctx.lineTo(5*4, -10*4);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

}



}
