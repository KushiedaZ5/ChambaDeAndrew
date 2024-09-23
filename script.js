const gifButton = document.getElementById("gifButton");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

document.addEventListener("keydown", function (event) {
  const step = 10;

  switch (event.code) {
    case "ArrowUp":
      y -= step;
      break;
    case "ArrowDown":
      y += step;
      break;
    case "ArrowLeft":
      x -= step;
      break;
    case "ArrowRight":
      x += step;
      break;
  }

  gifButton.style.left = x + "px";
  gifButton.style.top = y + "px";
});
