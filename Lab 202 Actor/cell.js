class Cell {
  constructor(es, row, col, occ) {
    this.es = es;
    this.col = col;
    this.row = row;
    this.ctx1 = es.context1;
    this.width = es.cellWidth;
    this.height = es.cellHeight;
    this.xCoor = col*this.width+this.es.world.left;
    this.yCoor = row*this.height+this.es.world.top;
    this.loc = new JSVector(this.xCoor, this.yCoor);
    this.occupied = occ;

    this.neighbors = {
      n: null,
      ne: null,
      e: null,
      se: null,
      s: null,
      sw: null,
      w: null,
      nw: null,
    }

  }//  +++++++++  end constructor

  run() {
      this.render();
      this.loadNeighbors(this.neighbors);
  }

  render() {
    if(this.occupied == true){
      this.clr = "red"
    }
    else{
      this.clr = "green"
    }
    let ctx1 = this.ctx1;
    ctx1.save();
    ctx1.strokeStyle = "rgba(0,0,0,1)";
    ctx1.fillStyle = this.clr;
    ctx1.beginPath();
    ctx1.rect(this.loc.x, this.loc.y, this.width, this.height);
    ctx1.fill();
    ctx1.font = "20px serif";
    ctx1.strokeText("c = "+ this.col, this.loc.x+5, this.loc.y+20);
    ctx1.strokeText("r = "+ this.row, this.loc.x+5, this.loc.y+50);
    ctx1.stroke();
    ctx1.restore();
  }

  loadNeighbors(n){
    if(this.es.arrLoaded){
      for(let r=0; r<this.es.numRows; r++){
        for(let c=0; c<this.es.numCols; c++){
          let cell = this.es.cells[r][c];
          if(cell.occupied == false){
            if(r-1>=0){
              if(c == this.col && r == this.row-1){//north
                  n.n = cell;
              }
              else if(r == this.row-1 && c == this.col+1){//ne
                  n.ne = cell;
              }
              else if(r == this.row-1 && c == this.col-1){//nw
                  n.nw = cell;
              }
            }
            if(r+1<this.es.numRows){
              if(c == this.col && r == this.row+1){//south
                  n.s = cell;
              }
              else if(r == this.row+1 && c == this.col+1){//se
                  n.se = cell;
              }
              else if(r == this.row+1 && c == this.col-1){//sw
                  n.sw = cell;
              }
            }
            if(c-1>=0){
              if(r == this.row && c == this.col-1){//west
                  n.w = cell;
              }
            }
            if(c+1<this.es.numCols){
              if(r == this.row && c == this.col+1){//east
                  n.e = cell;
              }
          }
        }
      }
    }
  }
}

}//+++++++++++++++++++++  end of Cell class
