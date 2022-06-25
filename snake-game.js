import { SNAKE_SPEED, update as updateSnake, draw as drawSnake } from './snake'

let lastRenderTime = 0
const MS_PER_SEC = 1000


function main(currentTime) {
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / MS_PER_SEC
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  console.log('tick')
  lastRenderTime = currentTime

  update()
  draw()
}

function update() {
  updateSnake()
}

function draw() {
  drawSnake()
}

// Start the game
window.requestAnimationFrame(main)