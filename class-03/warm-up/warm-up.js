class Vehicle {
  constructor(wheels, isMotorized) {
    this.wheels = wheels;
    this.isMotorized = isMotorized;
  }
}

class Car extends Vehicle {
  constructor(color, bodyType, engineSize, transmission) {
    super(4, true);
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
