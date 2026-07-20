/*
Segment 1 has endpoints P1x,P1y and P2x,P2y
Segment 2 has endpoints Q1x,Q1y and Q2x,Q2y
*/
function intersectionPoint(P1x,P1y,P2x,P2y,Q1x,Q1y,Q2x,Q2y) {
  let Px = P1x;
  let Py = P1y;
  let Qx = Q1x;
  let Qy = Q1y;
  let ux = P2x-P1x;
  let uy = P2y-P1y;
  let vx = Q2x-Q1x;
  let vy = Q2y-Q1y;

  let num = (Px - Qx) * -uy + (Py - Qy) * ux;
  let den = vx * -uy + vy * ux;
  let x = Qx + (num / den) * vx;
  let y = Qy + (num / den) * vy;
  return [x, y];
}

function hasIntersect(){
  //indicate if the lines intersect
  let dM = det3x3(1, circles[0].x, circles[0].y, 1, circles[1].x, circles[1].y, 1, circles[2].x, circles[2].y);
  let dN = det3x3(1, circles[0].x, circles[0].y, 1, circles[1].x, circles[1].y, 1, circles[3].x, circles[3].y);
  let dO = det3x3(1, circles[2].x, circles[2].y, 1, circles[3].x, circles[3].y, 1, circles[0].x, circles[0].y);
  let dP = det3x3(1, circles[2].x, circles[2].y, 1, circles[3].x, circles[3].y, 1, circles[1].x, circles[1].y);
  if (Math.sign(dM) != Math.sign(dN) && Math.sign(dO) != Math.sign(dP)){ans=true} else {ans=false}
  if (Math.sign(dM)==0 && Math.sign(dN)==0 && Math.sign(dO)==0 && Math.sign(dP)==0){ans=false}
  return ans;
}

function det3x3(a, b, c, d, e, f, g, h, i) {
  return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}

function showSegs() {
  stroke(0); // Black lines
  strokeWeight(1);
  line(circles[0].x, circles[0].y, circles[1].x, circles[1].y);
  line(circles[2].x, circles[2].y, circles[3].x, circles[3].y);
  noStroke(); // Reset stroke for other drawing
}

function showCoordinates() {
  document.getElementById("RED").innerHTML =
    "Red = (" +
    Math.floor(circles[0].x) +
    " ," +
    Math.floor(circles[0].y) +
    ")";
  document.getElementById("GRN").innerHTML =
    "Grn = (" +
    Math.floor(circles[1].x) +
    " ," +
    Math.floor(circles[1].y) +
    ")";
  document.getElementById("BLU").innerHTML =
    "Blu = (" +
    Math.floor(circles[2].x) +
    " ," +
    Math.floor(circles[2].y) +
    ")";
  document.getElementById("YEL").innerHTML =
    "Yel = (" +
    Math.floor(circles[3].x) +
    " ," +
    Math.floor(circles[3].y) +
    ")";
}

function mousePressed() {
  // Check if mouse is inside any circle (reverse order for top priority)
  for (let i = circles.length - 1; i >= 0; i--) {
    let c = circles[i];
    let d = dist(mouseX, mouseY, c.x, c.y);

    if (d < c.r) {
      draggedIndex = i;
      offsetX = c.x - mouseX;
      offsetY = c.y - mouseY;
      return;
    }
  }
}

function mouseDragged() {
  if (draggedIndex !== -1) {
    let c = circles[draggedIndex];

    let newX = mouseX + offsetX;
    let newY = mouseY + offsetY;

    c.x = constrain(newX, c.r, width - c.r);
    c.y = constrain(newY, c.r, height - c.r);
  }
}

function mouseReleased() {
  draggedIndex = -1;
}
