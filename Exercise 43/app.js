// Exercise 43
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of magician's names
var magicians = ["Johnny", "Devil", "Blacko", "Teller"];
// Define the function show_magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define the function make_great to modify a copy of the array of magicians
function make_great(magicians) {
    // Return a new array with "the Great" added to each magician's name
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Call the function make_great with a copy of the array of magicians' names
var great_magicians = make_great(__spreadArray([], magicians, true));
// Call show_magicians with the original array of magician names
console.log("Original Magicians:");
show_magicians(magicians);
// Call show_magicians with the array of magicians' names with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
