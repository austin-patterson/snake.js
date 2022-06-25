import { getInputDirection } from "./snake-input.js"

export const SNAKE_SPEED = 3   //moves per second
const initSnake = () => { return [
  { x: 10, y: 11 },
  // { x: 11, y: 11 },
  // { x: 12, y: 11 },
  // { x: 13, y: 11 },
  // { x: 13, y: 10 },

] }
const body = [...initSnake()]

export function update () {
  const inputDirection = getInputDirection()
  
  // advance snake body
  for (let i = body.length - 2; i >= 0; i--) {
    body[i + 1] = { ...body[i] }
  }

  body[0].x += inputDirection.x
  body[0].y += inputDirection.y
}

export function draw(gameBoard) {
  body.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}