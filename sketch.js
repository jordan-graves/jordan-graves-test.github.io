function setup() {
 noCanvas();
  frameRate(1);
}

function draw() {
  background(220);
  document.getElementById("moving").style.left = int(random(0,300)) +"px";
   document.getElementById("moving").style.top = int(random(0,500)) +"px";
}