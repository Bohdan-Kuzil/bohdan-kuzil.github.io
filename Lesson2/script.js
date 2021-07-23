// Js оператори

//  && || -"або"
// let q=10
// if(q>=5){
//     console.log('yes');
// }

// let age = prompt('write your age');
// if (age >= 18) {
//     console.log('Welcom to club');
// }

// let age = prompt('write your age');
// if (age >= 18) {
//     console.log('Welcom to club');
// }
// else{
//     console.log('You smaller');
// }

// let age = prompt('write your age');
// if (age >= 18) {
//     console.log('Welcom to club');
// }
// else if (age==null){
//     console.log('write number');
// }
// else if (age == "") {
//     console.log('You dont write anything');
// }
// else if(age<18){
//     console.log('You smaller');
// }
// else {
//     console.log('Write text');
// }


// let club=prompt('write the best footbal club');
// if (club =='Arsenal'){
//     let ask=prompt('do yuo love Arsenal')
//     if (ask=='yes')
//     console.log('Me too');
//     else if(ask=='no') {
//         console.log('Opacha');
//     }
// }
// else{
//     console.log('Bad choose');
// }


// let n1=10
// let n2='10'
// if(n1===n2){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }


// let n1=+prompt('write first number')
// let n2=+prompt('write second number')
// if(n1>n2){
//     console.log(`Значення в змінній n1=${n1} більше за n2=${n2}`);
// }
// else if (n1 < n2) {
//     console.log(`Значення в змінній n1=${n1} менше за n2=${n2}`);
// }
// else if (n1 === n2) {
//     console.log(` змінні n1 та  n2 мають рівні значення ${n1}`);
// }


let count = 0;
console.log('Count=',count);
let ask = prompt('Яке призвіще першого президента')
if (ask === 'Кравчук' || ask === 'кравчук') {
    console.log('Вірно');
    count++
}
console.log('Count=', count);
// if(count==0||count==1||count==2){
//     console.log('дуже погано');
// }
if(count>=0 && count<=2){
    console.log('дуже погано');
}



// завдання
// let life=prompt('write yor age')
// if(life>=0 && life<=1){
//     console.log('НЕмовля');
// }
// else if(life>=2 && life<6){
//     console.log('дитина');
// }
// else if (life>=6  && life < 17) {
//     console.log('школяр');
// }
// else if (life >=17  && life < 22) {
//     console.log('студент');
// }

// let life = prompt('write yor age')
// if (life >= 0 && life <= 1 || life=='baby') {
//     console.log('НЕмовля');
// }
// else if (life >= 2 && life < 6) {
//     console.log('дитина');
// }
// else if (life >= 6 && life < 17) {
//     console.log('школяр');
// }
// else if (life >= 17 && life < 22) {
//     console.log('студент');
// }

// let ask= confirm('do you like coffe')
// if(ask){
//     console.log('me too');
// }
// else{
//     console.log('I love tea too');
// }

let zero=prompt("")
if(zero>0||zero=='+'){
    console.log('ви ввели додатнє число');
}
else if (zero ==null) {
    console.log('ви скасували дію ');
}
else if (zero =="") {
    console.log('ви нічого не ввели');
}
else if (zero <0 ||  zero == '-') {
    console.log('ви ввели відємне  число');
}
else if (zero == 0 || zero =='zero') {
    console.log('ви ввели нуль');
}
else{
    console.log('ви ввели текст');
}
