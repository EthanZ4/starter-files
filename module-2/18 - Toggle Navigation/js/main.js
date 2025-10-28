const btn = document.querySelector('.toggle-btn');

console.log(btn);

btn.addEventListener('click', function(event) {
    event.stopPropagation();
    this.nextElementSibling.classList.toggle('expanded');

});

const drop = document.querySelector('.dropdown > a');

drop.addEventListener('click', function(event) {
    event.preventDefault();
    this.nextElementSibling.classList.toggle('expanded');
})

