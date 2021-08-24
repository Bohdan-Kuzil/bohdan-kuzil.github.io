function maxNum(...arg) {
  let res = arg[0];
  for (let i = 0; i < arg.length; i++) {
    if (res < arg[i]) res = arg[i];
  }
  return res
}
console.log( maxNum(1, 5, 8, 9, 11, 8, 4, 3,17,-150,));