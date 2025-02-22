function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...set1].filter((item) => set2.has(item)).sort(); // sort просто чтобы понятней был вывод
}

const array1 = [1, 3, 2, 5, 4];
const array2 = [3, 4, 5, 6, 7];
console.log(findCommonElements(array1, array2)); // [3, 4, 5]
