let date = new Date();
const d = new Date();
let day = d.getDate();
let text = document.querySelector(".text1");
text.innerHTML = (' (' + day + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');
let text1 = document.querySelector(".text2");
text1.innerHTML = (' (' + day + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ')');