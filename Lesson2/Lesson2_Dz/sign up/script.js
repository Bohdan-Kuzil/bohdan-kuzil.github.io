let ask = prompt(`Ведіть ім'я`)
if (ask == `ім'я`){
let ask2 = prompt('Ведіть пароль')

if (ask2 == 'логос') { console.log('Ласкаво просимо!'); }

}
else if (ask == null) {
    console.log('Вхід скасовано');
}
else
console.log('Я вас не знаю');