let a = prompt('Введіть число');
let b = prompt('Введіть степінь');
let result = 1;
for (let i = 1; i <= b||i<=-b; i++){
    result*=a
}
document.write(`<h4>${result} </h4>` );