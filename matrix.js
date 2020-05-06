function vectomatrix(v){

    let m = [];
    for(let i = 0; i < 3; i++){
        m[i] = [];
    }
    m[0][0] = v.x;
    m[1][0] = v.y;
    m[2][0] = v.z;
    return m;
}

function matrixtovec(m){
  return createVector(m[0][0],m[1][0], m.length > 2 ? m[2][0] : 0);
}

function logMatrix(m){
  const cols = m[0].length;
  const rows = m.length;
  console.log(rows + "x" + cols);
  console.log("------------------");

  let s = ' ';
  for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
          s += m[i][j] + ' ';
      }
      console.log(s);
  }
  console.log("nope");
}

function matMulVec(a, vec){
  let m = vectomatrix(vec);
  let r = matmul(a,m);
  return matrixtovec(r);
}

function matmul(a,b){
  if(b instanceof p5.Vector){
      return matMulVec(a,b);
  }

  let colsA = a[0].length;
  let rowsA = a.length;
  let colsB = b[0].length;
  let rowsB = b.length;

  if(colsA !== rowsB){
      console.error("colums of A must match rows of B");
      return null;
  }

  result = [];
  for(let j = 0; j < rowsA; j++){
      result[j] = [];
      for(let i = 0; i < colsB; i++){
       let sum = 0;
       for(let n = 0; n < colsA; n++){
           sum += a[j][n] * b[n][i];
       }
       result[j][i] = sum;
      }
   }
    return result;
}