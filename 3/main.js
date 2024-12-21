const mocks = require("./mocks.json");

const formattedStudents =
  mocks.students.length > 0 &&
  mocks.students.flatMap((student) =>
    student.marks.map((markObj) => ({
      "Имя": student.name,
      "Фамилия": student.lastName,
      "Предмет": markObj.subject,
      "Оценка": markObj.mark,
    }))
  );

function showStudents(students) {
  if (!students) {
    console.log("Кажется произошла ошибка...");
    return;
  }

  console.table(students);
}

showStudents();
