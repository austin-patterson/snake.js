import { getInputDirection } from "./snake-input.js";

export const SNAKE_SPEED = 3; //moves per second

const body = [...initSnake()];
let newSegments = 0;

function initSnake() {
  return [
    { x: 10, y: 11 },
    // { x: 11, y: 11 },
    // { x: 12, y: 11 },
    // { x: 13, y: 11 },
    // { x: 13, y: 10 },
  ];
}

export function update() {
  addSegments();

  const inputDirection = getInputDirection();
  if (inputDirection.x === 0 && inputDirection.y === 0) return;

  // advance snake body
  for (let i = body.length - 2; i >= 0; i--) {
    body[i + 1] = { ...body[i] };
  }
  // advance snake head
  body[0].x += inputDirection.x;
  body[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  body.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return body.some((segment, index) => {
    if (ignoreHead && index === 0 ) return false;
    return equalPositions(segment, position);
  });
}

export function getSnakeHead() {
  return body[0];
}

export function snakeIntersection() {
  return onSnake(body[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    body.push({ ...body[body.length - 1] });
  }
  newSegments = 0;
}
