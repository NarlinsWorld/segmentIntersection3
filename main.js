appendHTML("explainer",`<h2>Segment Intersection</h2>
  If we have a line segment given by its two endpoints, $(A_x,A_y)$
  and $(B_x,B_y)$, we can determine to which side of that $($line the
  one connecting A and B$)$ has a third point, $P$. It is given by the
  sign of the following determinant. $$D=\\left|\\begin{array}{ccc}
1 & A_{x} & A_{y}\\\\
1 & B_{x} & B_{y}\\\\
1 & P_{x} & P_{y}
\\end{array}\\right|$$

<img src=SegmentIntersection.png width=100%>
In the figure, we see two segments and some possible arrangements
with and without intersection. Let's look at some determinates.


$$\d_{M}=\\left|\\begin{array}{ccc}
1 & A_{x} & A_{y}\\\\
1 & B_{x} & B_{y}\\\\
1 & C_{x} & C_{y}
\\end{array}\\right|\\qquad \d_{N}=\\left|\\begin{array}{ccc}
1 & A_{x} & A_{y}\\\\
1 & B_{x} & B_{y}\\\\
1 & D_{x} & D_{y}
\\end{array}\\right|$$

$$ d_{O}=\\left|\\begin{array}{ccc}
1 & C_{x} & C_{y}\\\\
1 & D_{x} & D_{y}\\\\
1 & A_{x} & A_{y}
\\end{array}\\right|\\qquad d_{P}=\\left|\\begin{array}{ccc}
1 & C_{x} & C_{y}\\\\
1 & D_{x} & D_{y}\\\\
1 & B_{x} & B_{y}
\\end{array}\\right|$$


$$\\text{if }
\\left[
\\left(sign(d_{M})\\ne sign(d_{N})
\\right)

\\text{ and }
(sign(d_O) \\ne sign(d_P))
\\right]
$$
$$\\text{then the segments intersect.}$$
The only remaining exception is if all four determinates are zero, then the segments coincide, an regardless of whether they overlap, we consider that no intersection.
  `);



let circles = [];
let draggedIndex = -1;

function setup() {
  const cnvs = createCanvas(400, 400);
  cnvs.parent("cvs");
  background(230);
  // Create 4 circles with diameter 10
  let radius = 5;

  // Position them in different locations
  circles.push({ x: 80, y: 80, r: radius, color: [255, 100, 100] });
  circles.push({ x: 200, y: 80, r: radius, color: [100, 255, 100] });
  circles.push({ x: 80, y: 200, r: radius, color: [100, 100, 255] });
  circles.push({ x: 200, y: 200, r: radius, color: [255, 255, 100] });
}

function draw() {
  background(220);
  // Draw all circles 
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];

    // Different appearance when being dragged
    if (i === draggedIndex) {
      fill(c.color[0], c.color[1], c.color[2], 200);
      stroke(0);
      strokeWeight(2);
      ellipse(c.x, c.y, c.r * 2 + 6);
      noStroke();
      fill(c.color[0], c.color[1], c.color[2], 255);
    } else {
      fill(c.color[0], c.color[1], c.color[2]);
    }

    ellipse(c.x, c.y, c.r * 2);
  }
  // Display instructions
  fill(0);
  noStroke();
  textSize(12);
  textAlign(LEFT);
  text("Click and drag any circle to move it. Segment intersection will show.", 10, height - 10);

  showSegs();
  showCoordinates();  // Display circle positions (no Math.floor on objects!)
  intersectsTF = hasIntersect();
  //document.getElementById("X").innerHTML = intersectsTF;
  if(intersectsTF){
    let IP = intersectionPoint(
      circles[0].x,
      circles[0].y,           
      circles[1].x,
      circles[1].y,
      circles[2].x,
      circles[2].y,
      circles[3].x,
      circles[3].y
    );
    document.getElementById("X").innerHTML = IP[0]+", "+IP[1];
    strokeWeight(2);
    fill("black");
    circle(IP[0],IP[1],10);
  } else {
    document.getElementById("X").innerHTML = "no Intersection";
  }
}