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

let canvas = document.createElement("canvas");
canvas.height = 700;
canvas.width = 700;
canvas.style.display = "inline-block";
canvas.style.whiteSpace = "nowrap";
document.getElementById("secondWrapper").appendChild(canvas);

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
document.getElementById("tileDiv").appendChild(button);
}