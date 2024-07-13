// Exercise 17
var dinnerGuests = ["Farhan", "Salim", "Yousuf"];
// for (let i = 0; i < dinnerGuests.length; i++) {
//     console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
// }
var not_present = 'Salim';
var new_guest = 'Danish';
dinnerGuests[1] = new_guest;
// for(let i=0; i<dinnerGuests.length; i++){
//     console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
// }
dinnerGuests.unshift('Amir', 'Anas');
// for(let i=0; i<dinnerGuests.length; i++){
//     console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
// }
console.log('\nUnfortunately we can not arrange big table , Only two person allow.');
while (dinnerGuests.length > 2) {
    var remove_guest = dinnerGuests.pop();
    console.log("Sorry Dear.".concat(remove_guest, " You are not invited for dinner party. "));
}
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear " + dinnerGuests[i] + ",\n\nYou are still invited to a dinner party\n\nSincerely, [Haris Khan]");
}
dinnerGuests.splice(0, 2);
console.log(dinnerGuests);
