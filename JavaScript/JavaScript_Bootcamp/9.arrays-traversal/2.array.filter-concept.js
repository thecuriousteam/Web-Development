const numbers = [1, 2, 3, 4, 5];

// extracting the even numbers

const evenNumber = numbers.filter((num) => num % 2 === 0);
const oddNumber = numbers.filter((num) => num % 2 != 0);

console.log(`
Even Number Arrsy ${evenNumber} \
odd Number Arrsy ${oddNumber}`);
