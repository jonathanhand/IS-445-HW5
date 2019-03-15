const keyboardInfo = e => {
  console.log(`${e.keyCode}`);
  if (`${e.keyCode}` === "107") {
    addAir();
  } else if (`${e.keyCode}` === "109") {
    takeAir();
  }
};
var balloonElem = document.getElementById("balloon");
document.addEventListener("keyup", keyboardInfo);
function addAir() {
  var currentSize = balloonElem.style.fontSize;
  var newSize = parseInt(currentSize) * 1.15;
  balloonElem.style.fontSize = `${newSize}` + "%";
}

function takeAir() {
  var currentSize = balloonElem.style.fontSize;
  var newSize = parseInt(currentSize) * 0.85;
  balloonElem.style.fontSize = `${newSize}` + "%";
}
 