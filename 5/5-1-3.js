function sumAfterLastZero(arr) {
  const lastZeroIndex = arr.lastIndexOf(0);

  if (lastZeroIndex === -1 || lastZeroIndex === arr.length - 1) {
    return 0;
  }

  return arr.slice(lastZeroIndex + 1).reduce((sum, num) => sum + num, 0);
}

console.log(sumAfterLastZero([1, 2, 0, 3, 4])); // будет 7
console.log(sumAfterLastZero([0, 1, 2, 0, 5])); // будет 5
console.log(sumAfterLastZero([1, 2, 3])); // будет 0
