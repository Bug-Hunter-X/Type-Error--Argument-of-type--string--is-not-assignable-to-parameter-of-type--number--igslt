function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b; 
  } else {
    console.error("Invalid input. Both values must be numbers.");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(10, 20); // Correct: 30
let result2 = addSafe("hello", 10); // Error message: Invalid input. Both values must be numbers. Result: 0
let result3 = addSafe(10, "world"); // Error message: Invalid input. Both values must be numbers. Result: 0