const counterLabel = document.getElementById('counter-label');
const settingsDiv = document.getElementById('settings-div');
const settingsButton = document.getElementById('settings-button');

let isMenuOpened = false;

const counter = (multiplier = 1, seconds = 0) => () =>
    (counterLabel.innerHTML = ++seconds * multiplier);

setInterval(counter(), 1000);

settingsButton.addEventListener('click', () => {
    isMenuOpened = !isMenuOpened;
    settingsDiv.style.visibility = isMenuOpened ? 'visible' : 'hidden';
});
