## map method

1. `Map Method` - The map method is used for creating a new array by applying a function to each element of an existing array.

```
const newArray = originalArray.map((element, index, array) => {
  // Return transformed value based on element, index, or array
});

```

2. `filter Method` - The filter method is used to create a new array with elements that pass a certain condition defined by a provided function.

```
const filteredArray = originalArray.filter((element, index, array) => {
  // Return true to include the element or false to exclude it
});

```

3. `reduce Method`

- The reduce method is used to reduce the elements of an array to a single value. It takes a callback function and an initial accumulator value.
- Where we use
  - Use reduce() to sum array values
  - Transform array into single value/object
  - Find max/min value in array
- syntax

```
const result = originalArray.reduce((accumulator, element, index, array) => {
  // Return the updated accumulator value based on element, index, or array
}, initialValue);

```
- `accumulator` : The accumulated value from the previous iteration.
- `element` : The current element in the array.
- `index` : The index of the current element.
- `array` : The array being reduced.
- `initialValue` : The initial value of the accumulator (optional but recommended).
- `result` : The single value that results from the reduction.
