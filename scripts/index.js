let showEl = document.getElementById('menuItems');
let menuButton = document.getElementById('menu');
menuButton.addEventListener('click', function () {
    showEl.classList.toggle('enable');
});

let lastBg = document.getElementById('last');
let mountain = document.getElementById('mountain');
let mountain1 = document.getElementById('mountain1');
mountain1.addEventListener('click', function () {
    lastBg.classList.toggle('last');
    mountain.src = "./images/lam-tab-1-schedule.png";
});

let mountain2 = document.getElementById('mountain2');
mountain2.addEventListener('click', function () {
    lastBg.classList.toggle('last2');
    mountain.src = "./images/Iam-tab-2-schedule.png";
});
