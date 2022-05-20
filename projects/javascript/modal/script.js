'use strict'

document.querySelectorAll('.show-modal').forEach((element) => {
    element.addEventListener('click', showModal);
});

function showModal(element){
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.modal').classList.remove('hidden');

}

document.querySelector('.close-modal').addEventListener('click', closeModal);
function closeModal(){
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.modal').classList.add('hidden');

}

// Bind escape key
document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') closeModal();
})