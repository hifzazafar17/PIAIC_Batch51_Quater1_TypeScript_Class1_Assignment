// Version that runs the if block (green alien)
let alienColorIf: string = 'green';

if (alienColorIf === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else {
  console.log("No points earned. Keep shooting!");
}

// Version that runs the else block (non-green alien)
let alienColorElse: string = 'red';

if (alienColorElse === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting down an alien of a different color.");
}
