const tabsItem = document.querySelectorAll('.review__item');
const tabsBtns = document.querySelectorAll('.icon-list__button');

function hiddeTabs () {
    tabsItem.forEach(item => item.classList.add('hidden'));
    tabsBtns.forEach(item => item.classList.remove('is-click'));
}

function showTab(index) {
    tabsItem[index].classList.remove('hidden');
    tabsBtns[index].classList.add('is-click');
}

hiddeTabs ();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    hiddeTabs();
    showTab(index);
}));

