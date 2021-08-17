let n = prompt('Напишіть число')
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

alert(factorial(n));
