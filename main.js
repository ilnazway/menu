const menuItems = document.querySelectorAll('.menu__item');
const link = document.querySelector('.main-button');
const modal = document.querySelector('.modal-wrapper');
const closeground = document.querySelector('.close-ground');

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.add("modal-open");
});

closeground.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal.classList.remove("modal-open");
});

menuItems.forEach(item => {
    item.onmouseover = function (e) {
        if (!e.currentTarget.classList.contains("menu__item--current")) {
            menuItems.forEach(item => {
                item.classList.remove('menu__item--current');
            });
            e.currentTarget.classList.add("menu__item--current");
            document.querySelector('.menu').classList.add('menu--active');
        }
    };
});

document.querySelector('.menu').onmouseover = function (e) {
    e.stopPropagation();
}

document.body.onmouseover = function (e) {
    menuItems.forEach(item => {
        item.classList.remove('menu__item--current');
    });
    e.currentTarget.classList.remove("menu__item--current");
    document.querySelector('.menu').classList.remove('menu--active');
}
