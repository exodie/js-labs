# Помощник

## Запуск
Запустить `.js` можно с помощью команды
```bash
node 1-3.js
```
<br />
Далее необходимо ввести желаемое число, и нажать `Enter`.

## Выполнение
Взял за основу простой цикл, в котором мы итерируемся от начального числа `1` до `x/2`, в котором делаю инкремент итерации если `x % i === 0`.
```js
  for (let i = 1; i <= x / 2; i++) {
    if (x % i === 0) {
      sumOfDivisors += i;
    }
  }
```

Довольно простой пример, можно усложнить если нужны гигантские числа (можно применить BigInt, но с ним уже так просто не выйдет как мне кажется).