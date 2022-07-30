let myMath = {
  a: 5,
  b: 2,
  sum() {
    return this.a + this.b;
  },
  multiplication() {
    return this.a * this.b;
  },
  division() {
    return this.a / this.b;
  },
  subtraction() {
    return this.a - this.b;
  },
};
console.log(myMath.sum());
console.log(myMath.multiplication());
console.log(myMath.division());
console.log(myMath.subtraction());