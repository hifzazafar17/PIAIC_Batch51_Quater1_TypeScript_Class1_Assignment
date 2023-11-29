//  countries name's
var countries = [
    "United States",
    "Canada",
    "Germany",
    "Japan",
    "Australia",
    "Brazil",
    "Pakistan",
    "India",
    "France",
    "Mexico",
];
// Print the list of countries
console.log("List of Countries:");
countries.forEach(function (country, index) { return console.log("".concat(index + 1, ". ").concat(country)); });
