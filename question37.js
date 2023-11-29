function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Python"; }
    console.log("Shirt size: ".concat(size));
    console.log("Message: ".concat(message));
    console.log("Summary: The shirt is size " + size + " and has the message: '" + message + "'.");
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "Coding is magic!");
