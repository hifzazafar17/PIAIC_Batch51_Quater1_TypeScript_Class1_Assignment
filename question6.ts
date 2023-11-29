// Store a person's name with whitespace characters
const personNameWithWhitespace: string = "\t\n   HifzaZa  \t\n";

// Print the name with surrounding whitespace
console.log(`Name with whitespace: "${personNameWithWhitespace}"`);

// Strip the whitespace and print the name
const strippedName: string = personNameWithWhitespace.trim();
console.log(`Stripped name: "${strippedName}"`);
