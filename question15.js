// Guest List
var guestList = ["hainya", "hiba", "hareem"];
// Print invitation messages
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
// Change in Guest List
var guestCantMakeIt = "hiba";
var newInvitee = "hunzala";
// Print the guest name who can't make it
console.log("\nUnfortunately, ".concat(guestCantMakeIt, " can't make it to the dinner.\n"));
// Replace the guest name who can't make it with a new invite
var indexToRemove = guestList.indexOf(guestCantMakeIt);
if (indexToRemove !== -1) {
    guestList.splice(indexToRemove, 1, newInvitee);
}
// Print the updated invitation messages
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
