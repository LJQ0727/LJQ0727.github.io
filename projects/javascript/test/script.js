'use strict'

function btnClick(btn) {
    console.log('btnclicked');
    let target = document.querySelector('div');
    target.classList.add('hidden');
}
function btnClick1(btn) {
    console.log('btn1clicked');
    let target = document.querySelector('div');
    target.classList.remove('hidden');
}