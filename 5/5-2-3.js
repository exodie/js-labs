function sumRowsWithNegative(matrix) {
  return matrix.reduce((result, row) => {
    if (row.some((num) => num < 0)) {
      result.push(row.reduce((sum, num) => sum + num, 0));
    }
    return result;
  }, []);
}

/**
 * [1, 2, 3] - Нет отрицательных - пропускаем
 * [-1, 2, -3] - Считаем сумму, получаем вроде -2 :)
 * [4, -5, 6] - Считаем сумму, получаем вроде 5
 */
const matrix = [
  [1, 2, 3],
  [-1, 2, -3],
  [4, -5, 6],
];

/**
 * [1, 2] - Пропуск
 * [-1, 5] - получаем -1 + 5
 * [1, 1] - пропуск
 * [-1, 0] - получаем -1 + 0
 */
const moreMatrix = [
  [1, 2],
  [-1, 5],
  [1, 1],
  [-1, 0]
];

console.log(sumRowsWithNegative(matrix));
console.log(sumRowsWithNegative(moreMatrix));

