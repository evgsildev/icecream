const infoBlock = document.querySelectorAll('.products__info');
const wrapperBlock = document.querySelectorAll('.products__wrapper');
const productButton = document.querySelectorAll('.btn--primary');
const clikedButton = document.querySelectorAll('.btn--secondary');


function showBlock (index) {
    infoBlock[index].classList.add('not-shown');
    wrapperBlock[index].classList.remove('not-shown');
}

function hideBlock (index) {
    infoBlock[index].classList.remove('not-shown');
     wrapperBlock[index].classList.add('not-shown');
}

function hideButton (index) {
    productButton[index].classList.add('btn--hidden');
    clikedButton[index].classList.remove('btn--hidden')
}


function showButton (index) {
    productButton[index].classList.remove('btn--hidden');
    clikedButton[index].classList.add('btn--hidden');
}



productButton.forEach((btn, index) => btn.addEventListener('click', () => {
    hideButton(index);
    showBlock(index);
}));

clikedButton.forEach((btn, index) => btn.addEventListener('click', () => {
    showButton(index);
    hideBlock(index);
}));