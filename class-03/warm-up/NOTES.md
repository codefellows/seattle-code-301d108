# Overview of the warm-up challenge

> Break students out into groups of 2-4 for 10 minutes. After regrouping, lead a 5-minute discussion related to their findings, questions answers, and solutions.

Converting to a proper class is merely syntactic sugar over a standard constructor function, as shown below

```javascript
class Car {

  constructor(color, bodyType, engineSize, transmission) {
    this.color = color;
    this.bodyType = bodyType;
    this.engineSize = engineSize;
    this.transmission = transmission;
    this.moving = false;
  }

  drive() {
    this.moving = true;
  }

  stop() {
    this.moving = false;
  }
}

const mazda = new Car("grey", "hatchback", "4cyl", "automatic");
console.log(`Is Moving? ${mazda.moving.toString()}`);
mazda.drive();
console.log(`Is Moving? ${mazda.moving.toString()}`);
mazda.stop();
console.log(`Is Moving? ${mazda.moving.toString()}`);
```

