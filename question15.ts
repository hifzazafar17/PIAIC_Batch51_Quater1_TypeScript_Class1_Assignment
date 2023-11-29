// Guest List
const guestList: string[] = ["hainya", "hiba", "hareem"];

// Print invitation messages
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}

// Change in Guest List
const guestCantMakeIt: string = "hiba";
const newInvitee: string = "hunzala";

// Print the guest name who can't make it
console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to the dinner.\n`);

// Replace the guest name who can't make it with a new invite
const indexToRemove: number = guestList.indexOf(guestCantMakeIt);
if (indexToRemove !== -1) {
    guestList.splice(indexToRemove, 1, newInvitee);
}

// Print the updated invitation messages
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}