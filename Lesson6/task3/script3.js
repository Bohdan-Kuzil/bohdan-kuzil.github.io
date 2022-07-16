`use stric`;

// let simplnumber = function () {
//   let n = prompt("Введіть перше число відліку");
//   let p = prompt("Введіть останнє число відліку");
//   let str = "";
//    for (let i = n; i <= p; i++){
//       if (i % p == 0)
//       str += i + " ";
//     }
//   console.log(str);
// };
// simplnumber();

let n1 = +prompt(`Введіть число початку відліку`);
let n2 = +prompt(`Введіть число кінця відліку`);
let str = ` `;
function simplNumber(n1, n2) {
  nextPrime: for (let i = n1; i <= n2; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    str += i + ` `;
  }
  console.log(str);
}
simplNumber(n1, n2);


