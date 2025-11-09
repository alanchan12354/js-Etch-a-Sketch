let x = 16;
let y = 16;

const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");

const createCanva = (x, y) => {
    for (let i = 0; i < x; i++) {
        let row = document.createElement("div");
        row.classList.add(`row`);
        row.id = `row${i}`;
        container.appendChild(row);
        for (let j = 0; j < y; j++) {
            let grid = document.createElement("div");
            grid.classList.add(`grid`);
            grid.id = `grid${i}${j}`;
            row.appendChild(grid);
        }
    }
}

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid")) {
        e.target.style.backgroundColor = "black";
    }
})

resetBtn.addEventListener("click", (e) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    x = parseInt(prompt("Enter x:"));
    y = parseInt(prompt("Enter y:"));
    createCanva(x, y);
})

createCanva(x, y);