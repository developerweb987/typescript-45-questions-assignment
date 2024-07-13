// Exercise 42

// Array of magician's names
let magicians: string[] = ["Johnny", "Devil", "Blacko", "Teller"];

// Define the function show_magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the function make_great to modify the array of magicians
function make_great(magicians: string[]): string[] {
    // Map each magician's name with "the Great" added
    return magicians.map(magician => `the Great ${magician}`);
}

// Call the function make_great to modify the array of magicians
magicians = make_great(magicians);

// Call show_magicians to see the modified list
show_magicians(magicians);
