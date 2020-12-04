function Game(){
  game = this;
    // get the canvas as a property of the game
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
    this.canvas = document.getElementById('canvas');
    // get the context
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    this.ctx = this.canvas.getContext('2d'); // This is the context

    // setup 6 sliders
    let updateSlider = function(e) {    // update event handler
        e.target.display.textContent = e.target.value;
    }
    for(i = 1; i <= 6; i++){    // for six sliders
        // use bracket notation to access slider properties of 'this'
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
        let sliderId = "slider" + i;    // "slider1", "slider2", etc
        let slider = this[sliderId] = document.getElementById(sliderId);
        // each slider has a text field to display its value
        slider.display = document.getElementById('s' + i +'value'); // "s1value", "s2value", etc
        slider.display.textContent = slider.value;  // display its current value
        // add event handler to update display
        slider.addEventListener('input',updateSlider);  // update display value when it changes
    }

    this.vehicles = [];
    this.numVehicles = 100;
    for(var i=0;i<this.numVehicles;i++){
      this.vehicles.push(new Vehicle(new JSVector(Math.random()*this.canvas.width, Math.random()*this.canvas.height)));
    }
}
// function to run the game each animation cycle
Game.prototype.run = function(){
  for(var i=0;i<this.numVehicles;i++){
    this.vehicles[i].run(this.vehicles);
  }

}
