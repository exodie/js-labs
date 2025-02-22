const mocks = require("./mocks.json");

const MATHS_FIELD_MARKER = "maths";
const PHYSICS_FIELD_MARKER = "physics";

class Mark {
  constructor(subject, mark) {
    this.subject = subject;
    this.mark = mark;
  }
}
class Student {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.marks = [];
  }

  getAverageMark() {
    if (this.marks.length === 0) return 0;
    return (
      this.marks.reduce((sum, mark) => sum + mark.mark, 0) / this.marks.length
    );
  }

  getMarksBySubject(subject) {
    return this.marks
      .filter((mark) => mark.subject === subject)
      .map((mark) => mark.mark);
  }

  addMark(subject, mark) {
    this.marks.push(new Mark(subject, mark));
  }

  deleteMarksBySubject(subject) {
    this.marks = this.marks.filter((mark) => mark.subject !== subject);
  }
}

const studentsInstances = mocks.students.map((student) => {
  const newStudent = new Student(student.name, student.lastName);
  student.marks.forEach((mark) => {
    newStudent.addMark(mark.subject, mark.mark);
  });
  return newStudent;
});

const formattedStudents =
  mocks.students.length > 0 &&
  mocks.students.flatMap((student) =>
    student.marks.map((markObj) => ({
      Имя: student.name,
      Фамилия: student.lastName,
      Предмет: markObj.subject,
      Оценка: markObj.mark,
    }))
  );

function showStudents(students) {
  if (!students) {
    console.log("Кажется произошла ошибка...");
    return;
  }

  console.table(students);
}

if (studentsInstances.length > 0) {
  console.log("\nСредние оценки в табличном формате:");
  const averageMarksTable = studentsInstances.map((student) => ({
    Студент: `${student.lastName} ${student.name}`,
    "Средняя оценка": student.getAverageMark().toFixed(2),
  }));
  console.table(averageMarksTable);

  const student = studentsInstances[0];

  console.log(`\nПример работы методов для студента ${student.name} ${student.lastName}:`);
  console.log(
    "Оценки по математике:",
    student.getMarksBySubject(MATHS_FIELD_MARKER)
  );

  console.log("\nДобавляем оценку...");
  student.addMark(PHYSICS_FIELD_MARKER, 5);
  console.log(`Новые оценки ${student.name} ${student.lastName}:`, student.marks);

  console.log("\nУдаляем оценки...");
  student.deleteMarksBySubject(MATHS_FIELD_MARKER);
  console.log(`Оценки ${student.name} ${student.lastName} после удаления:`, student.marks);

  // Выводиться информацию без изменений потому что, не перезаписываем полученный student.marks в изначальный объект
  console.log("\nПодробная информация о студентах:");
  showStudents(formattedStudents);
}
