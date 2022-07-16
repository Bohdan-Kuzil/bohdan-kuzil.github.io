function numFibinachi(...arg){
  let one = 0;
  let two = 1;
  let str='1 '
  let p = prompt("Введіть число");
     
  for (let i = 1; i <= p-1; i++) {
    let current = one + two;
    
    one = two;
    two = current;
    str += current + " ";
    
  }
 console.log(str);
  
}
numFibinachi();

