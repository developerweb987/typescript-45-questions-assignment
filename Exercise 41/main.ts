// Exercise 41

// Array of magician's names
let magicians: string[] = ["Johnny", "Devil", "Blacko", "Teller"];

// Define the function show_magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Call the function with the array of magicians
show_magicians(magicians);
