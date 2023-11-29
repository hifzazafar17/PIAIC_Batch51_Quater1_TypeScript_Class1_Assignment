// Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Try to access an element at an invalid index (intentional error)
const invalidIndex = 10;

// Check if the index is within the valid range before accessing the element
if (invalidIndex >= 0 && invalidIndex < numbers.length) {
  console.log(`Accessing element at index ${invalidIndex}: ${numbers[invalidIndex]}`);
} else {
  console.log(`Invalid index ${invalidIndex}. Please provide a valid index.`);
}
