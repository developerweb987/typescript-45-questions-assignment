// Exercise 14
var dinnerGuests = ["Farhan", "Salim", "Yousuf"];
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
}
var not_present = 'Salim';
var new_guest = 'Danish';
dinnerGuests[1] = new_guest;
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
}
console.log(" ".concat(not_present, " will not coming dinner party. "));
