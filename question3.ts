// Store a person's name 
const personName: string = "hifza";

// Print the name in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// Print the name in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// Print the name in titlecase
const titleCaseName = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(`Titlecase: ${titleCaseName}`);
