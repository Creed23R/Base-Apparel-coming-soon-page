const form = document.querySelector('.form');
const inputEmail = document.querySelector('.input');
const error = document.querySelector('.error');


form.addEventListener('submit', (event) => {
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (regExp.test(inputEmail.value)) {
        inputEmail.style.border = '1px solid var(--desaturatedRed)';
        inputEmail.style.backgroundImage = 'url("")';
        error.innerHTML = '';
    } else {
        event.preventDefault();
        inputEmail.style.border = '1px solid var(--softRed)';
        inputEmail.style.backgroundImage = 'url("./images/icon-error.svg")';
        error.innerHTML = 'Please provide a valid email';
    }
});