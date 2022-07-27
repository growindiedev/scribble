let container = document.querySelector(".canvas");
let gridSizeInput = document.querySelector("#size");
let colorModeValue;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    colorModeValue = e.target.value;
  });
});

document.querySelector(".reset-btn").addEventListener("click", () => {
  document.querySelectorAll(".grid-item").forEach((grid) => (grid.style = ""));
});

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

  if (colorModeValue === "rainbow") {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.setProperty("--color", `#${randomColor}`);
    return;
  } else if (colorModeValue === "eraser") {
    e.target.style = "";
    return;
  }

  e.target.style.setProperty("--color", color);
}

makeGrids(gridSizeInput.value, gridSizeInput.value);

gridSizeInput.onchange = (e) => {
  makeGrids(e.target.value, e.target.value);
};
