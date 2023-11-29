// Define the original guest list
var originalGuestList = [
    "Ania",
    "Maya",
    "Eurm",
];
// Function to generate dinner invitations
function generateInvitations(guests) {
    return guests.map(function (guest) { return "Dear ".concat(guest, ", you are invited to dinner!"); });
}
// Invite guests
var originalInvitations = generateInvitations(originalGuestList);
// Print original invitations
originalInvitations.forEach(function (invitation) { return console.log(invitation); });
// Simulate a guest not being able to make it
var guestNotAvailable = "Maya ";
console.log("".concat(guestNotAvailable, " can't make it to dinner."));
// Modify the list, replacing the unavailable guest with a new one
var updatedGuestList = originalGuestList.map(function (guest) {
    return guest === guestNotAvailable ? "Ada" : guest;
});
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Add one new guest to the beginning of the array
updatedGuestList.unshift("Maria");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(updatedGuestList.length / 2);
updatedGuestList.splice(middleIndex, 0, "Noreen");
// Use append() to add one new guest to the end of the list
updatedGuestList.push("Ada ");
// Generate new invitations
var newInvitations = generateInvitations(updatedGuestList);
// Print updated invitations
newInvitations.forEach(function (invitation) { return console.log(invitation); });
