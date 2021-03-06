// canvas stuff
var c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");
  
// fill canvas
ctx.fillStyle = "#E6E6E6";
ctx.fillRect(0,0,480,360);
 
// color select bar
var colourSelected = "White";
ctx.fillStyle = "#FFFFFF"; // white
ctx.fillRect(1,1,22,22);
ctx.fillStyle = "#00FF00"; // green
ctx.fillRect(26,1,22,22);
ctx.fillStyle = "#FF0000"; // red
ctx.fillRect(51,1,22,22);
ctx.fillStyle = "#0000FF"; // blue
ctx.fillRect(76,1,22,22);
ctx.fillStyle = "#FF9900"; // orange
ctx.fillRect(101,1,22,22);
ctx.fillStyle = "#FFFF00"; // yellow
ctx.fillRect(126,1,22,22);
  
renderCube();
// render the cube layout
var cubeState = [];
cubeState.push("FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF");
cubeState.push("00FF00","00FF00","00FF00","00FF00","00FF00","00FF00");
cubeState.push("FF0000","FF0000","FF0000","FF0000","FF0000","FF0000");
cubeState.push("0000FF","0000FF","0000FF","0000FF","0000FF","0000FF");
cubeState.push("FF9900","FF9900","FF9900","FF9900","FF9900","FF9900");
cubeState.push("FFFF00","FFFF00","FFFF00","FFFF00","FFFF00","FFFF00");
  
function renderCube(){
  renderCenters();
  var i = 1;
  
}

// render the cube centers
function renderCenters(){
  ctx.fillStyle = "#FF9900"; // orange
  ctx.fillRect(30,167,26,26);
  
  ctx.fillStyle = "#00FF00"; // green
  ctx.fillRect(108,167,26,26);
  
  ctx.fillStyle = "#FF0000"; // red
  ctx.fillRect(186,167,26,26);
  
  ctx.fillStyle = "#0000FF"; // blue
  ctx.fillRect(264,167,26,26);
  
  ctx.fillStyle = "#FFFFFF"; // white
  ctx.fillRect(108,89,26,26);
  
  ctx.fillStyle = "#FFFF00"; // yellow
  ctx.fillRect(108,245,26,26);
}
// algorithms for M2 targets
var m2a = "M2";
var m2b = "R' U R U' M2 U R' U' R";
var m2c = "U2 M' U2 M'";  
var m2d = "L U' L' U M2 U' L U L'";
var m2e = "B L' B' M2 B L B'";
var m2f = "B L2 B' M2 B L2 B'";
var m2g = "B L B' M2 B L' B'";
var m2h = "L' B L B' M2 B L' B' L";
var m2i = "D M' U R2 U' M U R2 U' D' M2";
var m2j = "U R U' M2 U R' U'";
var m2l = "U' L' U M2 U' L U";
var m2m = "B' R B M2 B' R' B";
var m2n = "R B' R' B M2 B' R B R'";
var m2o = "B' R' B M2 B' R B";
var m2p = "B' R2 B M2 B' R2 B";
var m2q = "B' R B U R2 U' M2 U R2 U' B' R' B";
var m2r = "U' L U M2 U' L' U";
var m2s = "M2 D U R2 U' M' U R2 U' M D'";
var m2t = "U R' U' M2 U R U'";
var m2v = "U R2 U' M2 U R2 U'";
var m2w = "M U2 M U2";
var m2x = "U' L2 U M2 U' L2 U";
  
// click detection scripting
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
c.addEventListener('click', function(evt) {
  var mousePos = getMousePos(c, evt);
  if (mousePos.y < 24){
    if (mousePos.x < 149){
      if (mousePos.x > 125){
        colourSelected = "Yellow";
      } else if (mousePos.x > 100){
        colourSelected = "Orange";
      } else if (mousePos.x > 75){
        colourSelected = "Blue";
      } else if (mousePos.x > 50){
        colourSelected = "Red";
      } else if (mousePos.x > 25){
        colourSelected = "Green";
      } else if (mousePos.x > 0){
        colourSelected = "White";
      }
    }
  document.getElementById("p1").innerHTML = "Colour Selected: " + colourSelected;
  }
}, false);
