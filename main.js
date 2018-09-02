const counterLabel = document.getElementById('counter-label');
const settingsDiv = document.getElementById('settings-div');
const settingsButton = document.getElementById('settings-button');
const settingsForm = document.getElementById('settings-form');
const settingsInput = document.getElementById('settings-input');

let isMenuOpened = false;

const setMenu = () => {
    settingsDiv.style.visibility = isMenuOpened ? 'visible' : 'hidden';
}

const counter = (multiplier = 1, seconds = 0) => () =>
    (counterLabel.innerHTML = (++seconds * multiplier).toFixed(2));

const submitForm = (event) => {
    event.preventDefault();
    isMenuOpened =  false;
    setMenu();

    const multiplier = Number(settingsInput.value) / 3600;
    setInterval(counter(multiplier), 1000);
    settingsButton.hidden = true;
}

settingsButton.addEventListener('click', () => {
    isMenuOpened = !isMenuOpened;
    setMenu();
});

settingsForm.addEventListener('submit',submitForm);
