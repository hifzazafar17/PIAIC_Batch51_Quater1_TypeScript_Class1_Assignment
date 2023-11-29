// Store a person's name in a variable
var personName = "hifzazafar";
// Print the name in lowercase
console.log("Lowercase: ".concat(personName.toLowerCase()));
// Print the name in uppercase
console.log("Uppercase: ".concat(personName.toUpperCase()));
// Print the name in titlecase
var titleCaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase: ".concat(titleCaseName));
