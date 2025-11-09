let x = 16;
let y = 16;

const container = document.querySelector(".container");

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