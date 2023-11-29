// Define an array of car objects
const cars: { brand: string, model: string, year: number, color: string }[] = [
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
  cars.forEach((car, index) => {
    console.log(`${index + 1}. Brand: ${car.brand}`);
    console.log(`   Model: ${car.model}`);
    console.log(`   Year: ${car.year}`);
    console.log(`   Color: ${car.color}`);
    console.log(); 
  });
  