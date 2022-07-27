let container = document.querySelector(".canvas");
let val = document.querySelector("#size");
let gridBoxes;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function makeGrids(rows, cols) {
  container.innerHTML = "";
  console.log("exp", rows, cols);
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");

    cell.addEventListener("mouseover", changeColor);
    cell.addEventListener("mousedown", changeColor);
    container.appendChild(cell).classList.add("grid-item");
  }
  // gridBoxes = document.querySelectorAll(".grid-item");
  // gridBoxes.forEach((element) => {
  //   element.onmousemove = (e) => e.target.classList.add("grid-item-color");
  // });
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  e.target.classList.add("grid-item-color");
}

makeGrids(10, 10);

val.onchange = (e) => {
  makeGrids(e.target.value, e.target.value);
};
