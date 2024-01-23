## Contol Structures

### Decision Structures

1. for loop - The for loop is used to iterate over a block of code a specified number of times.

```
for (let i = 0; i < 5; i++) {
  console.log(i);
}

```

2. for...in Loop - Iterates over the properties of an object. It is usually used with objects, not arrays

```
for (key in object) {
    // body of for...in
}

const person = { name: 'John', age: 30, job: 'developer' };
for (let key in person) {
  console.log(key, person[key]);
}
```

4. for...of Loop - Introduced in ECMAScript 6, it iterates over the values of an iterable object like arrays or strings.

```
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}

```

5. forEach() loop - A method available for arrays, which allows you to iterate over each element.

```
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});

```

6. while loop - The while loop continues to execute a block of code while a specified condition is true.

```
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

```

3. do...while loop - Similar to the while loop, but the code block is executed at least once before the condition is checked.

```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

```
