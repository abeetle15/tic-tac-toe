export const winningCombinations = [[[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]]]

// rows
for (let i = 0; i < 3; i++) {
  const condition = [];
  for (let j = 0; j < 3; j++) {
    condition.push([i, j])
  }
  winningCombinations.push(condition)
}

// columns
for (let i = 0; i < 3; i++) {
  const condition = [];
  for (let j = 0; j < 3; j++) {
    condition.push([j, i])
  }
  winningCombinations.push(condition)
};