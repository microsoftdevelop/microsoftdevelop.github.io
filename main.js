"use strict";

const dateHTML = document.getElementsByClassName('date');


const addZeros = n => {
    if (n.toString().length < 2) return '0'.concat(n);
    return n;
}

const changeDate = () => {
    const date = new Date();
    let day = addZeros(date.getDate());
    let month = addZeros(date.getMonth() + 1);
    let year = date.getFullYear();
    for (let i = 0; i < dateHTML.length; i++) {
        dateHTML[i].innerHTML = (`(${day}.${month}.${year})`)
    }
}

changeDate();
