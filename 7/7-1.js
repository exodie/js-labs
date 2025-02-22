class Student {
  constructor(name, lastName, marks) {
    this.name = name;
    this.lastName = lastName;
    this.marks = marks;
  }

  // уже было подобное в 3-й лабе
  getAverageMark() {
    if (!this.marks.length) return 0;
    return (
      this.marks.reduce((sum, mark) => sum + mark.mark, 0) / this.marks.length
    );
  }
}

// Взял с интернета сам алгоритм и переписал под свои нужды
function shellSortByAverage(students) {
  const n = students.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = students[i];
      let j = i;

      while (
        j >= gap &&
        students[j - gap].getAverageMark() > temp.getAverageMark()
      ) {
        students[j] = students[j - gap];
        j -= gap;
      }
      students[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return students;
}

const students = [
  new Student("Иван", "Иванов", [{ subject: "Math", mark: 4 }]),
  new Student("Мария", "Петрова", [{ subject: "Math", mark: 5 }]),
  new Student("Петр", "Сидоров", [{ subject: "Math", mark: 3 }]),
];

console.log("До сортировки:");
students.forEach((s) =>
  console.log(`${s.lastName} ${s.name}: ${s.getAverageMark()}`)
);

shellSortByAverage(students);

console.log("\nПосле сортировки:");
students.forEach((s) =>
  console.log(`${s.lastName} ${s.name}: ${s.getAverageMark()}`)
);
