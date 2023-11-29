let Car: string = 'subaru';

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 2
console.log("Is car != 'toyota'? I predict True.");
console.log(car !== 'toyota');

// Test 3
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

// Test 4
console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru');

// Test 5
let is_JapaneseCar: boolean = true;
console.log("Is car == 'subaru' and is Japanese Car is True? I predict True.");
console.log(car === 'subaru' && isJapaneseCar);

// Test 6
let has_Sunroof: boolean = false;
console.log("Is car == 'subaru' or has Sunroof is True? I predict True.");
console.log(car === 'subaru' || hasSunroof);

// Test 7
let is_Sedan: boolean = true;
console.log("Is car == 'subaru' and is Sedan is False? I predict False.");
console.log(car === 'subaru' && !isSedan);

// Test 8
let is_Convertible: boolean = false;
console.log("Is car != 'subaru' or is Convertible is False? I predict False.");
console.log(car !== 'subaru' || !isConvertible);

// Test 9
let is_LuxuryCar: boolean = false;
console.log("Is car == 'subaru' or is LuxuryCar is True? I predict True.");
console.log(car === 'subaru' || isLuxuryCar);

// Test 10
let is_CompactCar: boolean = true;
console.log("Is car != 'subaru' and isCompactCar is False? I predict False.");
console.log(car !== 'subaru' && !isCompactCar);
