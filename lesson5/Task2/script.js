function isPrimes(n) {
  for (let i = 2, max = Math.sqrt(n); i <= max; i++) {
    if (n % i === 0) {
      alert("не просте");
      break;
    } else {
      alert("просте");
      break;
    }
  }
}
let res = isPrimes(prompt("Введіть число"));
