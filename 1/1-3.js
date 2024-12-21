const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPerfectNumber(x) {
  if (x < 1) {
    return false;
  }

  let sumOfDivisors = 0;

  // Делитель от 1 до "x / 2"
  for (let i = 1; i <= x / 2; i++) {
    if (x % i === 0) {
      sumOfDivisors += i;
    }
  }

  return sumOfDivisors === x;
}

rl.question('Введите целое число X: ', (input) => {
  const x = parseInt(input, 10);

  if (isPerfectNumber(x)) {
    console.log(`${x} является совершенным числом.`);
  } else {
    console.log(`${x} не является совершенным числом.`);
  }

  rl.close();
});
