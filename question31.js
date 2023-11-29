// usernames
var usernames = ['areeba', 'bisma', 'rabia', 'haleema', 'sumbul'];
// Check if the list of users is not empty
if (usernames.length > 0) {
    // greetings
    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to grow our user base.");
}
// Remove all usernames
usernames = [];
// Check if the list of users is not empty
if (usernames.length > 0) {
    // print greetings (this won't be for an empty list)
    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to grow our user base.");
}
