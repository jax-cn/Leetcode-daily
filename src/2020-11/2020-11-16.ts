import { strictEqual } from 'assert'

function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let i = 0; i < matrix[0].length - 1; i++) {
    let x = i,
      y = 0,
      num = matrix[0][i]
    while (x < matrix[0].length - 1 && y < matrix.length - 1) {
      x++
      y++
      if (matrix[y][x] !== num) return false
    }
  }
  for (let j = 1; j < matrix.length - 1; j++) {
    let x = 0,
      y = j,
      num = matrix[y][0]
    while (y < matrix.length - 1 && x < matrix[0].length - 1) {
      x++
      y++
      if (matrix[y][x] !== num) return false
    }
  }
  return true
}

strictEqual(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ]),
  true
)
