const closeBtn = document.querySelector('.close');
const modalWindow = document.querySelector('.overlay');
closeBtn.addEventListener('click', function(evt) {
    modalWindow.style.display = 'none';
});

setTimeout(() => {
    modalWindow.style.display = 'flex';
}, 2000);