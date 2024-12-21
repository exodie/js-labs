function introduce(name, rank = "рядовой") {
  if (typeof name !== "string") {
    console.log("Кажется что-то пошло не так...");
    return;
  }

  console.log(`Меня зовут ${name}, и я ${rank}.`);
}

introduce("Иван", "капитан");
introduce("Алексей");
introduce(NaN);
