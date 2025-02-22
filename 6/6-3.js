class Student {
  constructor(name, group) {
    this.name = name;
    this.group = group;
  }
}

function findLargestGroup(students) {
  const groupCounts = students.reduce((map, student) => {
    map.set(student.group, (map.get(student.group) || 0) + 1);
    return map;
  }, new Map());

  let maxCount = 0;
  groupCounts.forEach((count) => {
    if (count > maxCount) maxCount = count;
  });

  return maxCount;
}

const students = [
  new Student("Иван", "Группа-101"),
  new Student("Мария", "Группа-102"),
  new Student("Петр", "Группа-101"),
  new Student("Ольга", "Группа-103"),
  new Student("Алексей", "Группа-101"),
];

console.log(findLargestGroup(students)); // максимальное 3 (в группе 101)
