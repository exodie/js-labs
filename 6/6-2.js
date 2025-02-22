function countOccurrences(arr) {
  const countMap = arr.reduce((map, item) => {
    map.set(item, (map.get(item) || 0) + 1);
    return map;
  }, new Map());

  const sortedEntries = [...countMap.entries()].sort((a, b) => a[1] - b[1]);

  return new Map(sortedEntries);
}

const fruits = ["orange", "orange", "pineapple", "apple", "banana", "apple", "orange", "banana", "apple"];
const resultMap = countOccurrences(fruits);

resultMap.forEach((count, fruit) => {
  console.log(`${fruit}: ${count}`);
});
