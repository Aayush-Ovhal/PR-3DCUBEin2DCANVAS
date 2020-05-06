
let angle = 0;

let points = [];

// const projection =[
//  [1,0,0],
//  [0,1,0]
// ]

function setup(){
   createCanvas(600,400);

   points[0] = createVector(-0.5,-0.5,-0.5);
   points[1] = createVector(0.5,-0.5,-0.5);
   points[2] = createVector(0.5,0.5,-0.5);
   points[3] = createVector(-0.5,0.5,-0.5);
   points[4] = createVector(-0.5,-0.5,0.5);
   points[5] = createVector(0.5,-0.5,0.5);
   points[6] = createVector(0.5,0.5,0.5);
   points[7] = createVector(-0.5,0.5,0.5);
    
}

function draw(){
background(0);

translate(width/2,height/2);



const rotationZ =[
    [cos(angle), -sin(angle),0],
    [sin(angle), cos(angle),0],
    [0, 0, 1]
]

const rotationX =[
    [1, 0, 0],
    [0, cos(angle), -sin(angle)],
    [0, sin(angle), cos(angle)]
]

const rotationY =[
    [cos(angle), 0, sin(angle)],
    [0, 1, 0],
    [-sin(angle), 0, cos(angle)]
]

var projected = [];

for(let i = 0; i < points.length; i++){
   let rotated = matmul(rotationY,points[i]);
   rotated = matmul(rotationX,rotated);
   rotated = matmul(rotationZ,rotated);

   let distance = 2;
   let z = 1/(distance - rotated.z);
   const projection =[
    [z,0,0],
    [0,z,0]
   ]
   let projected2d = matmul(projection,rotated);
   projected2d.mult(300);
   projected[i] = projected2d; 
   point(projected2d.x, projected2d.y);
   
}

for(let i = 0; i < projected.length; i++){
    strokeWeight(16);
    stroke(255);
    noFill();

    const v = projected[i];
    point(v.x,v.y);
}

for(let i = 0; i < 4; i++){
    connect(i,(i+1) % 4,projected);
    connect(i + 4, ((i + 1) % 4) + 4, projected);
    connect(i,i+4,projected);
}

angle += 0.02;
}

function connect(i,j,points){
    const a = points[i];
    const b = points[j];
    strokeWeight(3);
    stroke("orange");
    line(a.x,a.y,b.x,b.y);
}

// var angle = 0;

// function setup(){

//     createCanvas(600,400,WEBGL);
//     ortho();

// }

// function draw(){
//     background(0);
//     strokeWeight(5);
//     stroke("orange");
//     noFill();
//     rotateX(angle);
//     rotateY(angle*2);
//     rotateZ(angle*3);
//     box(200);

//     angle += 0.02;


// }