var balls = [];
var paused = false;
var x = prompt("Number of Balls","42"); //user entered number of balls page dialog
function setup() {
  let wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("id", "wrapperDiv");
  wrapperDiv.style.backgroundColor = "red";
  wrapperDiv.style.width = "800px";
  wrapperDiv.style.height = "800px";
  document.body.appendChild(wrapperDiv);
  
  let buttonMenu = document.createElement("div");
  buttonMenu.setAttribute("id", "buttonMenu");
  buttonMenu.style.width = "800px";
  buttonMenu.style.height = "100px";
  buttonMenu.style.backgroundColor = "green";
  document.getElementById("wrapperDiv").appendChild(buttonMenu);
  
  let secondWrapper = document.createElement("div");
  secondWrapper.setAttribute("id", "secondWrapper");
  secondWrapper.style.display = "inline-block";
  // secondWrapper.style.whiteSpace = "nowrap";
  secondWrapper.style.width = "800px";
  secondWrapper.style.height = "700px";
  document.getElementById("wrapperDiv").appendChild(secondWrapper);
  
  let cnv = createCanvas(700, 700);
  // cnv.height = 700;
  // cnv.width = 700;
  cnv.style.display = "inline-block";
  cnv.style.whiteSpace = "nowrap";
  //document.getElementById("secondWrapper").appendChild(cnv);
  cnv.parent('secondWrapper')
  //cnv.position(100, 0);
  
  let tileDiv = document.createElement("div");
  tileDiv.setAttribute("id", "tileDiv")
  tileDiv.style.width = "100px";
  tileDiv.style.height = "700px";
  tileDiv.style.display = "inline-block";
  // tileDiv.style.whiteSpace = "nowrap";
  tileDiv.style.backgroundColor = "blue";
  document.getElementById("secondWrapper").appendChild(tileDiv);
  
  
  for (i = 0; i < 5; i++) {
  let button = document.createElement("button");
  button.setAttribute("id", 'button'+i);
  button.textContent = 'test value '+i;
  button.style.padding = "15px";
  button.style.margin = "25px";
  button.style.backgroundColor = "orange";
  document.getElementById("buttonMenu").appendChild(button);
  }
  
  for (i = 0; i < 5; i++) {
  let button = document.createElement("button");
  button.setAttribute("id", 'tile'+i);
  button.textContent = 'test '+i;
  button.style.padding = "15px";
  button.style.cssFloat = 'left';
  button.style.margin = "20px";
  // button.style.whiteSpace = "initial";
  button.style.backgroundColor = "orange";
  if(i==0){
    button.textContent = 'pause';
    button.addEventListener('click', function(){
      paused = !paused;
      console.log("Mouse Clicked");
      if(paused==true){
      document.getElementById("tile0").textContent = "play";
      }
      else{
        document.getElementById("tile0").textContent = "pause";
      }
    },false);
  }
  document.getElementById("tileDiv").appendChild(button);
  }






  // var cnv = createCanvas(800, 800);
  // cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(q=0;q<x;q++){ //create array with number of balls wanted
    balls[q] = new Ball(random(width),random(height),random(-5,5),random(-5,5))
  }
}


function draw() {
  if(!paused){
ballsDraw();
  }
}

function ballsDraw(){
  background(5,5,5,50)//get rid of ball trails
  for(i=0;i<x;i++){
balls[i].run();
}
}
