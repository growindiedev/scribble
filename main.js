let container = document.querySelector(".canvas");

function makeRows(rows, cols) {
  console.log("exp", rows, cols);
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    // cell.innerText = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
}

console.log("what is wrong");
let val = document.querySelector("#size");
console.dir(val);
val.onchange = (e) => {
  container.style.setProperty("--grid-rows", 0);
  container.style.setProperty("--grid-cols", 0);
  makeRows(e.target.value, e.target.value);
};
