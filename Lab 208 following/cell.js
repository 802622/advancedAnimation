class Cell {
    constructor(game, r, c) {
        this.width = game.cellWidth;
        this.height = game.cellHeight;
        let x = c * this.width;
        let y = r * this.height;
        this.loc = new JSVector(x, y);
        this.r = r;
        this.c = c;
        this.isPath = false;
    }//  +++++++++  end constructor

    run() {
        this.render();
        // this.update();
    }

    render() {
        let ctx = game.ctx;

        if(this.isPath) {
            ctx.fillStyle = "burlywood";
            ctx.fillRect(this.loc.x, this.loc.y,this.width, this.height);
        }
        //render cell
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(this.loc.x, this.loc.y, this.width, this.height);
        // ctx.fill();
        ctx.stroke();
    }

    update() {

    }
}//+++++++++++++++++++++  end of Cell class
