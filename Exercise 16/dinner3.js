// Exercise 15
var dinnerGuests = ["Farhan", "Salim", "Yousuf"];
// for (let i = 0; i < dinnerGuests.length; i++) {
//     console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
// }
var not_present = 'Salim';
var new_guest = 'Danish';
dinnerGuests[1] = new_guest;
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
}
dinnerGuests.unshift('Amir', 'Anas');
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
}
