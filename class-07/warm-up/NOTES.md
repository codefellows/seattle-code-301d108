# Overview of the warm-up challenge

> Break students out into groups of 2-4 for 10 minutes. After regrouping, lead a 5-minute discussion related to their findings, questions answers, and solutions.

The Conversion ...

```javascript
import React, {useState} from 'react';

export default function App(props) {

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
```
