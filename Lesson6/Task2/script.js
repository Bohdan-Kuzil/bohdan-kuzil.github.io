// Function Expression

//  let progress= function (n, q) {
//   let b=1
//   let sum = 1;
//   sum= b*(1-Math.pow(q,n))/(1-q) ;
    
//   return sum;
// }

// console.log(progress(4,3 ));



// Цикл Function Expression

let progress = function (n, q) {
  let b = 1;
  let sum = 1;
  for(i=1;i<=n;i*=q){
    sum = (b * (1 - Math.pow(q, n))) / (1 - q);
    return sum ;
  }
}
console.log(progress(4,3 ));