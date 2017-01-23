const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

//function power(mtrx,p){
    //mtrx is the matrix you input
    //p is the power of the matrix you want
    //let temp = mtrx;
    //for( let i = 0; i<p; i++){
      //temp = Matrix(temp.prod(mtrx))

//    }

  //  return temp();
//}


//testing code
//console.log(power(A,1));


function power2(mtrx,p){

  let  temp = mtrx;

  for( let i = 0; i<p; i++){
    if(p ==1){
      return mtrx;
    }
    else if(p%2 == 0){
      let half = power2(mtrx,p/2)
      return half.prod(half);

    }
    else if(p%2 !== 0)
      let half = power2(mtrx,math.ceil(p/2));
      return half.prod(power2(p-half));
  }
}

console.log(power2(A,60))
