# Overview of the warm-up challenge

> Break students out into groups of 2-4 for 10 minutes. After regrouping, lead a 5-minute discussion related to their findings, questions answers, and solutions.

When reviewing this with the students, provide and explain each of the options. You can do each of these a number of ways. Especially when looking at the arrow function, the way you can identify the parameters and the return values can vary.

## Exercise 1

```javascript
const fibonacci = function (num) {
  if (num < 2) {
    return num;
  }
  return (fibonacci(num - 1) + fibonacci(num - 2));
}

// or this:

const fibonacci = (num) => num < 2 ? num : (fibonacci(num - 1) + fibonacci(num - 2));

```

## Exercise 2

This solution makes the helper function an arrow function expression but you can do this any number of ways.

```javascript
const greeting = function (person) {

  const normalize = (name) => {
    const firstName = name.split(" ")[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  }

  return `Hello ${normalize(person)}`;

}
```
