const counterLabel = document.getElementById("counter-label");

const counter = (multiplier = 1, seconds = 0) => () =>
  (counterLabel.innerHTML = ++seconds * multiplier);

setInterval(counter(), 1000);
