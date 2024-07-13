// Exercise 17
let dinnerGuests: string[] = ["Farhan", "Salim", "Yousuf"];

// for (let i = 0; i < dinnerGuests.length; i++) {
//     console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
// }
let not_present : string = 'Salim';
let new_guest : string = 'Danish';
dinnerGuests[1] = new_guest;
// for(let i=0; i<dinnerGuests.length; i++){
//     console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
// }
    dinnerGuests.unshift('Amir','Anas');
    // for(let i=0; i<dinnerGuests.length; i++){
    //     console.log("Dear " + dinnerGuests[i] + ",\n\nYou are cordially invited to a dinner party.\n\nSincerely, [Haris Khan]");
    // }
console.log('\nUnfortunately we can not arrange big table , Only two person allow.')
while(dinnerGuests.length>2){
    let remove_guest = dinnerGuests.pop();
    console.log(`Sorry Dear.${remove_guest} You are not invited for dinner party. `);
}
for(let i=0; i<dinnerGuests.length; i++){
    console.log("Dear " + dinnerGuests[i] + ",\n\nYou are still invited to a dinner party\n\nSincerely, [Haris Khan]");
}
dinnerGuests.splice(0,2)
console.log(dinnerGuests)
