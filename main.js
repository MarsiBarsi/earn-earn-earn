const counterLabel = document.getElementById('counter-label');
const settingsDiv = document.getElementById('settings-div');
const settingsButton = document.getElementById('settings-button');
const settingsForm = document.getElementById('settings-form');

let isMenuOpened = false;

const setMenu = () => {
    settingsDiv.style.visibility = isMenuOpened ? 'visible' : 'hidden';
}

const counter = (multiplier = 1, seconds = 0) => () =>
    (counterLabel.innerHTML = ++seconds * multiplier);

const submitForm = (event) => {
    event.preventDefault();
    isMenuOpened =  false;
    setMenu();
}

setInterval(counter(), 1000);

settingsButton.addEventListener('click', () => {
    isMenuOpened = !isMenuOpened;
    setMenu();
});

settingsForm.addEventListener('submit',submitForm);
