// list of current users
var currentUsers = ['Abhi', 'Imran', 'Hamza', 'Umar', 'Khubaib'];
// list of new users
var newUsers = ['subhan', 'Imran', 'yasir', 'ukasha', 'nazeef'];
var _loop_1 = function (newUser) {
    // Convert both usernames to lowercase for case-insensitive comparison
    var lowercaseNewUser = newUser.toLowerCase();
    var isUnique = !currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === lowercaseNewUser; });
    // Print a message based on the result
    if (isUnique) {
        console.log("Username '".concat(newUser, "' is available."));
    }
    else {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
};
// new users to check for uniqueness
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
