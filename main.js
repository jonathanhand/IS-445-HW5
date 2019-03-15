const keyboardInfo = e => {
  console.log(`${e.keyCode}`);
  if (`${e.keyCode}` === "107") {
    changeAir(1);
  } else if (`${e.keyCode}` === "109") {
    changeAir(-1);
  }
};
function changeAir(key) {
  var currentSize = balloonElem.style.fontSize;
  var newSize = 100;
  if (key === 1) {
    newSize = parseInt(currentSize) * 1.15;
  } else {
    newSize = parseInt(currentSize) * 0.85;
  }
  balloonElem.style.fontSize = `${newSize}` + "%";
}

var balloonElem = document.getElementById("balloon");
document.addEventListener("keyup", keyboardInfo);
