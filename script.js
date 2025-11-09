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
            grid.style.width = `calc(90vmin / ${x})`
            grid.style.height = `calc(90vmin / ${y})`
            grid.style.opacity = 0;
            row.appendChild(grid);
        }
    }
}

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid")) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = randomColor;
        e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
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