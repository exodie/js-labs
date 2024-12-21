const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Figure {
  #x = 0;
  #y = 0;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  square() {
    return undefined;
  }
}

class Circle extends Figure {
  #radius = 0;

  constructor(x, y, radius) {
    super(x, y);
    this.#radius = radius;
  }

  square() {
    return Math.PI * (this.#radius * this.#radius);
  }
}

class Rectangle extends Figure {
  #height = 0;
  #width = 0;

  constructor(x, y, height, width) {
    super(x, y);
    this.#height = height;
    this.#width = width;
  }

  square() {
    return this.#height * this.#width;
  }
}

function createFigures() {
  rl.question(
    "Введите координаты центра круга (x y) и радиус: ",
    (circleInput) => {
      const [x, y, radius] = circleInput.split(" ").map(Number);
      const circle = new Circle(x, y, radius);
      console.log(`Площадь круга: ${circle.square().toFixed(2)}`);

      rl.question(
        "Введите координаты центра прямоугольника (x y), высоту и ширину: ",
        (rectangleInput) => {
          const [rectX, rectY, height, width] = rectangleInput
            .split(" ")
            .map(Number);
          const rectangle = new Rectangle(rectX, rectY, height, width);
          console.log(`Площадь прямоугольника: ${rectangle.square()}`);

          rl.close();
        }
      );
    }
  );
}

createFigures();
