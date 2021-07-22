alert('Давайте пройдемо тест,відповідайте так або ні!')
let count = 0;
console.log('Count=', count);
let ask = prompt('Столиця України - Київ?')
if (ask == 'так' ) {
    console.log('Вірно');
    count++
}
let ask2 = prompt('Телефони почали продаватися в 1896?')
if (ask ==='ні') {
    console.log('Вірно');
    count++
}
let ask3 = prompt('Столиця Естонии Аддіс-Абеба ?')
if (ask == 'так') {
    console.log('Вірно');
    count++
}
let ask4 = prompt('Написали Руську правду в 1056?')
if (ask =='ні') {
    console.log('Вірно');
    count++
}
let ask5 = prompt('Джекі чан народився 6 квітня 1954 р.?')
if (ask =='так') {
    console.log('Вірно');
    count++
}
let ask6 = prompt('Географічний центр знаходиться в Україні?')
if (ask =='так') {
    console.log('Вірно');
    count++
}
let ask7 = prompt('Автором першої в світі конституції є Пилип Орлик?')
if (ask =='так') {
    console.log('Вірно');
    count++
}
let ask8 = prompt('Трембіта найдовший музичний інструмент в світі?')
if (ask =='так') {
    console.log('Вірно');
    count++
}
let ask9 = prompt('Острозька Академія перший вищий навчальний заклад в світі?')
if (ask =='ні') {
    console.log('Вірно');
    count++
}
let ask10 = prompt('Дуб-патріарх – найстаріший дуб в Європі?')
if (ask =='ні') {
    console.log('Вірно');
    count++
}
console.log('Count=', count);

if (count >= 0 && count <= 2) {
    console.log('дуже погано');
}
if (count >= 3 && count <= 5) {
    console.log('задовільно');
}
if (count >= 6 && count <= 8) {
    console.log('добре');
}
if (count >= 8 && count <= 10) {
    console.log('відмінно');
}