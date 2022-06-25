export const NUM_ROWS = 21;
export const NUM_COLUMNS = 21;

export function randomGridPosition() {
  return {
    x: 1 + Math.floor(Math.random() * NUM_ROWS),
    y: 1 + Math.floor(Math.random() * NUM_COLUMNS),
  };
}

export function outsideGrid(pos) {
  return pos.x < 1 || pos.x > NUM_ROWS || pos.y < 1 || pos.y > NUM_COLUMNS
}
