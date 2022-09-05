let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let color = 'black';
let click = true;

const populateBoard = (size) => {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.addEventListener('mousedown', colorSquare);
        square.style.backgroundColor = 'white';
        board.appendChild(square);
    }
}

populateBoard(16);

const changeSize = (input) => {
    if (input >= 2 && input <= 100) {
        populateBoard(input);
    } else {
        window.alert('Enter valid number!');
    }
}

function colorSquare(e) { 
    if (click) {
        if (color === "random") {
            e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            e.target.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
     if (e.target.tagName != 'BUTTON') {
         click = !click;
         if (click) {
             document.querySelector('.mode').textContent = "Mode: Coloring";
         } else {
             document.querySelector('.mode').textContent = "Mode: Not Coloring";
         }
     }
});