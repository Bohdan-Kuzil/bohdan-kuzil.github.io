// 1)Задача
let n = prompt('Напишіть число')
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

alert(factorial(n));


// 2)Задача
for (let i = 1000; i <= 9999; i += 3) {
    document.write(`  <h4>loop ${i}</h4> `)
}

// 3)Задача
for (let i = 1, b = 1; i <= 55; i++, b += 2) {
    document.write(`  <h4>loop ${b + ''}</h4> `)
}
// 4)Задача
for (let i = 90; i >= 0; i -= 5) {
    document.write(`<h4>loop ${i}</h4>`)
}
// 5)Задача
for (let i = 2, b = 2; i <= 20; i++, b *= 2) {
    document.write(`<h4>loop ${b + ''} <\h4>`)
}
// 6)Задача
for (let a = 2; a <= 10000; a = 2 * a - 1) {
    document.write(`<h4>loop ${a + ""} <\h4>`)
}
// 7)Задача
for (let a = -166, i = 0; a <= 99; a = 2 * a + 200, i++) {
    if (a > -100 && (a < -9 || a > 9))
        document.write(`<h4>loop ${a + ""} <\h4>`)
}
// 8)Задача
let a = prompt('Введіть число');
let b = prompt('Введіть степінь');
let result = 1;
for (let i = 1; i <= b || i <= -b; i++) {
    result *= a
}
document.write(`<h4>${result} </h4>`);