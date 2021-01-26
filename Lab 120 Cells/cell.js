class Cell {
    constructor(es, row, col) {
      this.es = es;
      this.col = col;
      this.row = row;
      this.ctx1 = es.context1;
      this.width = es.cellWidth;
      this.height = es.cellHeight;
      this.xCoor = col*this.width+this.es.world.left;
      this.yCoor = row*this.height+this.es.world.top;
      this.loc = new JSVector(this.xCoor, this.yCoor);
      this.clr = "rgba(50, 150, 120, 0.2)"
    }//  +++++++++  end constructor

    run() {
        this.render();
        this.update();
    }

    render() {
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

    update() {

    }
}//+++++++++++++++++++++  end of Cell class
