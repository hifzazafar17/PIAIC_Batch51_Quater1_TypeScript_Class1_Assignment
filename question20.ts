//  countries name's
const countries: string[] = [
    "United States",
    "Canada",
    "Germany",
    "Japan",
    "Australia",
    "Brazil",
    "Pakistan",
    "India",
    "France",
    "Mexico", ];
  
  // Print the list of countries
  console.log("List of Countries:");
  countries.forEach((country, index) => console.log(`${index + 1}. ${country}`));
  