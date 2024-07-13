// Exercise 15
let dinnerGuests: string[] = ["Farhan", "Salim", "Yousuf"];

// for (let i = 0; i < dinnerGuests.length; i++) {
//     console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
// }
let not_present : string = 'Salim';
let new_guest : string = 'Danish';
dinnerGuests[1] = new_guest;
for(let i=0; i<dinnerGuests.length; i++){
    console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
}
    dinnerGuests.unshift('Amir','Anas');
    for(let i=0; i<dinnerGuests.length; i++){
        console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
    }
