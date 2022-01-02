let date = new Date();
const d = new Date();
let day = d.getDate();
let texto = document.getElementById('text1');
var checkMonth = date.getMonth();

if (checkMonth<9) {
texto.innerHTML = (' (' + day + '.' + '0' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');
} else {
texto.innerHTML = (' (' + day + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');
}


let date1 = new Date();
const d1 = new Date();
let day1 = d1.getDate();
let texto1 = document.getElementById('text2');

if (checkMonth<9) {
texto1.innerHTML = (' (' + day1 + '.' + '0' + (date.getMonth() + 1) + '.' + date1.getFullYear() + ')');
} else {
texto1.innerHTML = (' (' + day1 + '.' + (date.getMonth() + 1) + '.' + date1.getFullYear() + ')');
}
