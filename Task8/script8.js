let a = prompt('Введіть число');
let b = prompt('Введіть степінь');
let result = 1;

for (let i = 1; i <= b || i <= -b; i++) {
    result *= a
    if(-b>0){
        for (let i = 1; i <= b || i <= -b; i++)
        result*=1/a
    }
    
}
document.write(`<h4>${result} </h4>`);