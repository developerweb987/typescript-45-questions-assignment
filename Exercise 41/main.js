// Exercise 41
// Array of magician's names
var magicians = ["Johnny", "Devil", "Blacko", "Teller"];
// Define the function show_magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Call the function with the array of magicians
show_magicians(magicians);
