import { NUM_ROWS, NUM_COLUMNS, outsideGrid } from "./snake-grid.js";
import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./snake-food.js";

export const MS_PER_SEC = 1000;

const gameBoard = document.getElementById("game-board");
let lastRenderTime;
let gameOver = false;

function initGame() {
  lastRenderTime = 0;
  gameBoard.style.gridTemplateRows = `repeat(${NUM_ROWS}, 1fr)`;
  gameBoard.style.gridTemplateColumns = `repeat(${NUM_COLUMNS}, 1fr)`;
  window.requestAnimationFrame(main);
}

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press OK to restart.')) {
      window.location = '/'
    }
    return
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / MS_PER_SEC;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log("tick");
  lastRenderTime = currentTime;

  update();
  draw();
}

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

initGame();