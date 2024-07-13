// List of current users
var current_users = ["Rehan", "Babar", "Raju", "Anas", "Hasan"];
// List of new users
var new_users = ["Sana", "Arman", "Fawad", "Noureen", "Hamid"];
new_users.forEach(function (newuser) {
    if (current_users.some(function (currentuser) { return currentuser.toLowerCase() === newuser.toLowerCase(); })) {
        console.log("".concat(newuser, " will need to enter a new username. "));
    }
    else {
        console.log("".concat(newuser, " is available. "));
    }
});
