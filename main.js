const keyboardInfo = e => {
  console.log(`${e.keyCode}`);
  if (`${e.keyCode}` === "107") {
    changeAir(15);
  } else if (`${e.keyCode}` === "109") {
    changeAir(-15);
  }
};

function changeAir(key, currentSize) {
  var currentSize = parseInt(balloonElem.style.fontSize);
  var newSize = currentSize + key;
  if (newSize <= 0) {
    balloonElem.innerHTML = "Done";
    balloonElem.style.fontSize = "60px";
    document.removeEventListener("keyup", keyboardInfo);
  } else if (newSize >= 60) {
    balloonElem.innerHTML = "💥";
    document.removeEventListener("keyup", keyboardInfo);
  } else {
    balloonElem.style.fontSize = `${newSize}` + "px";
  }
}

var balloonElem = document.getElementById("balloon");
document.addEventListener("keyup", keyboardInfo);
