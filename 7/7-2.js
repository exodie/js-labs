// Взял алгоритм с интернета и запихнул туда студентов из задания
function binarySearchStudent(students, lastName, firstName) {
  const sorted = [...students].sort((a, b) => {
    const nameCompare = a.lastName.localeCompare(b.lastName);
    return nameCompare !== 0 ? nameCompare : a.name.localeCompare(b.name);
  });

  let left = 0;
  let right = sorted.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const current = sorted[mid];

    const compareLastName = lastName.localeCompare(current.lastName);
    const compareFirstName = firstName.localeCompare(current.name);

    if (compareLastName === 0 && compareFirstName === 0) {
      return sorted[mid];
    }

    if (
      compareLastName < 0 ||
      (compareLastName === 0 && compareFirstName < 0)
    ) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // Можно придумать текст получше, но мне и так сойдет
  return 'Студент не найден';
}

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

const students = [
  new Student("Иван", "Иванов", [{ subject: "Math", mark: 4 }]),
  new Student("Мария", "Петрова", [{ subject: "Math", mark: 5 }]),
  new Student("Петр", "Сидоров", [{ subject: "Math", mark: 3 }]),
];

const foundStudent = binarySearchStudent(students, "Иванов", "Иван");
const unFoundStudent = binarySearchStudent(students, "Admin", "Adminov");
console.log("\nНайденный студент:", foundStudent);
console.log("\nНе-Найденный студент:", unFoundStudent);

