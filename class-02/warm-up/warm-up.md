# Warm-Up Exercise

Given the following functions, created as declarations, convert each to a function expression using both arrow function and standard notation.

## Example

```javascript
function hello(name) {
  return "Hello " + name;
}
```

Conversion:

```javascript
const hello = function (name) {
  return "Hello " + name;
}

const hello = name => "Hello " + name;
```

## Exercise 1

```javascript
function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  return (fibonacci(num - 1) + fibonacci(num - 2));
}

let iterations = 10;
for (let i = 1; i < iterations; i++) {
  console.log(fibonacci(i));
}
```

## Exercise 2

```javascript
function greeting(person) {

  function normalize(name) {
    const firstName = name.split(" ")[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  }

  return `Hello ${normalize(person)}`;

}
```
