const hourHand = document.querySelector("[data-hour-hand]");
const mintHand = document.querySelector("[data-mint-hand]");
const secondHand = document.querySelector("[data-second-hand]");

setInterval(setClock, 1000);

function setClock() {
  const currentTime = new Date();
  const secondRatio = currentTime.getSeconds() / 60;
  const mintRatio = (secondRatio + currentTime.getMinutes()) / 60;
  const hourRatio = (mintRatio + currentTime.getHours()) / 12;

  setRotation(secondHand, secondRatio);
  setRotation(mintHand, mintRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
