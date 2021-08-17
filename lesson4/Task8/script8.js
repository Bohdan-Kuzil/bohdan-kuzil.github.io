let result=1
 i=1;
let a = prompt('Введіть число');
let b = prompt('Введіть степінь');
while (i <= b || i <= -b){
    if (b > 0) {
        result *= a
    }
    else {
        result *=1/  a
      
    }
    i++;
}
document.write(`<h4>${result} </h4>`);


