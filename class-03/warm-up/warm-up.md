# Warm-Up Exercise

Convert the following constructor function into a proper JavaScript class

```javascript
function Car(color, bodyType, engineSize, transmission) {
  this.color = color;
  this.bodyType = bodyType;
  this.engineSize = engineSize;
  this.transmission = transmission;
  this.moving = false;
}

Car.prototype.drive = function () {
  this.moving = true;
}

Car.prototype.stop = function () {
  this.moving = false;
}

const mazda = new Car("grey", "hatchback", "4cyl", "automatic");
console.log(`Is Moving? ${mazda.moving.toString()}`);
mazda.drive();
console.log(`Is Moving? ${mazda.moving.toString()}`);
mazda.stop();
console.log(`Is Moving? ${mazda.moving.toString()}`);
```

