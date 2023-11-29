// Define an array of car objects
var cars = [
    {
        brand: "Toyota",
        model: "Camry",
        year: 2022,
        color: "Silver",
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2021,
        color: "Blue",
    },
    {
        brand: "Tesla",
        model: "Model 3",
        year: 2022,
        color: "White",
    },
];
// Print information about each car
console.log("List of Cars:");
cars.forEach(function (car, index) {
    console.log("".concat(index + 1, ". Brand: ").concat(car.brand));
    console.log("   Model: ".concat(car.model));
    console.log("   Year: ".concat(car.year));
    console.log("   Color: ".concat(car.color));
    console.log();
});
