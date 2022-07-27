let container = document.querySelector(".canvas");
let val = document.querySelector("#size");
let colorModeValue = "black";
// let gridBoxes;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let btns = document.querySelectorAll("button").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    colorModeValue = e.target.value;
    alert(colorModeValue);
  })
);

function makeGrids(rows, cols) {
  container.innerHTML = "";
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", changeColor);
    cell.addEventListener("mousedown", changeColor);
    container.appendChild(cell).classList.add("grid-item");
  }
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  let color = document.querySelector("#color-input").value;
  e.target.classList.add("grid-item-color");

  if (colorModeValue === "color") {
    e.target.style.setProperty("--color", color);
    return;
  } else if (colorModeValue === "rainbow") {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.setProperty("--color", `#${randomColor}`);
    return;
  } else if (colorModeValue === "eraser") {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.setProperty("--color", "#ffff");
    return;
  }
  e.target.style.setProperty("--color", "black");
}

// e.target.style.setProperty("--color", "black");

makeGrids(100, 100);

val.onchange = (e) => {
  makeGrids(e.target.value, e.target.value);
};
