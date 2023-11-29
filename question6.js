// Store a person's name with whitespace characters
var personNameWithWhitespace = "\t\n   HifzaZa  \t\n";
// Print the name with surrounding whitespace
console.log("Name with whitespace: \"".concat(personNameWithWhitespace, "\""));
// Strip the whitespace and print the name
var strippedName = personNameWithWhitespace.trim();
console.log("Stripped name: \"".concat(strippedName, "\""));
