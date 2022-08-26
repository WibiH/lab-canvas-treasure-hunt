// main.js
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  for (let i = 0; i <= 500; i = i + 50) {
    context.moveTo(i, 0);
    context.lineTo(i, 500);

    context.moveTo(0, i);
    context.lineTo(500, i);

    context.strokeStyle = "black";
    context.stroke();
  }
}

// Iteration 2
class Character {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  moveUp() {
    this.col -= 50;
  }
  moveRight() {
    this.row += 50;
  }
  moveDown() {
    this.col += 50;
  }
  moveLeft() {
    this.row -= 50;
  }
}

// Iteration 3
const playerImg = document.getElementById("player");
playerImg.src = "/images/character-down.png";
let playerImgRow = 0;
let playerImgCol = 0;

function drawPlayer(row, col) {
  context.clearRect(0, 0, 500, 500);
  context.drawImage(playerImg, playerImgRow, playerImgCol, 50, 50);
  context.stroke();
}

// Iteration 4
class Treasure {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  setRandomPosition() {
    this.row = Math.floor(Math.random() * width);
    this.col = Math.floor(Math.random() * height);
  }
}

const treasureImg = document.getElementById("treasure");
treasureImg.src = "/images/treasure.png";

let treasurePos = Treasure.setRandomPosition;

function drawTreasure(row, col) {
  context.clearRect(0, 0, 500, 500);
  context.drawImage(
    treasureImg,
    treasurePos.this.row,
    treasurePos.this.col,
    50,
    50
  );
  context.stroke();
}

// Iteration 5
function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();

drawPlayer(0, 0);
