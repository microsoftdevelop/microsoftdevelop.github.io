var date = new Date();
let text = document.getElementById('text1');
var checkMonth = date.getMonth();
var checkDay = date.getDate()

if (checkMonth<9 && checkDay<10) {
text.innerHTML = (' (' + '0' + date.getDate() + '.' + '0' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');
} else if (checkMonth<9){
text.innerHTML = (' (' + date.getDate() + '.' + '0' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');
} else if (checkDay<10){
text.innerHTML = (' (' + '0' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');
} else {
text.innerHTML = (' (' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');
}



let textEN = document.getElementById('text2');

if (checkMonth<9 && checkDay<10) {
textEN.innerHTML = (' (' + '0' + date.getDate() + '.' + '0' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');
} else if (checkMonth<9){
textEN.innerHTML = (' (' + date.getDate() + '.' + '0' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');
} else if (checkDay<10){
textEN.innerHTML = (' (' + '0' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');
} else {
textEN.innerHTML = (' (' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');
}
