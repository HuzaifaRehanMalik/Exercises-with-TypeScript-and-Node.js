// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var user_names = ["admin", "user1", "user2", "user3"];
var new_names = ["user1", "user2", "user3", "user4", "user5", "user6"];
var current_users = user_names.map(function (user) { return user.toLocaleLowerCase(); });
for (var _i = 0, new_names_1 = new_names; _i < new_names_1.length; _i++) {
    var new_name = new_names_1[_i];
    if (current_users.includes(new_name.toLowerCase())) {
        console.log("Sorry, the username '".concat(new_name, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_name, "' is available."));
    }
}
