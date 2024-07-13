// Exercise 42
// Array of magician's names
var magicians = ["Johnny", "Devil", "Blacko", "Teller"];
// Define the function show_magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define the function make_great to modify the array of magicians
function make_great(magicians) {
    // Map each magician's name with "the Great" added
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Call the function make_great to modify the array of magicians
magicians = make_great(magicians);
// Call show_magicians to see the modified list
show_magicians(magicians);
