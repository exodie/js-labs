# Помощник

## Запуск
Запустить `.js` можно с помощью команды
```bash
node main.js
```

*Если вы уже находитесь в консоли, но ваш путь = `js-labs/`, то выполните:
```bash
node 3/main.js
```

## Выполнение
1. Написал моковые (тестовые) данные в `mocks.json`, в которых описал базовые свойства студентов.
2. Отформатировал моки в переменной `formattedStudents` (использовал flatMap чтобы сделать массив плоским, думаю так будет лучше, но можно и использовать просто map), а также сделал проверку на пустые моки `mocks.students.length > 0 && ...`
3. Написал функцию `showStudents`, которая принимает список стундентов (если он не передан - ошибка, также по хорошему сделать проверку на допустим `Date` и т.п объекты в `JS`, но мне лениво, потому что все это обходится с использованием `TS`), отображает переданный валидный список ввиде таблицы.