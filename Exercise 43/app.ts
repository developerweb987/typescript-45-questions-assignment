// Exercise 43

// Array of magician's names
let magicians: string[] = ["Johnny", "Devil", "Blacko", "Teller"];

// Define the function show_magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the function make_great to modify a copy of the array of magicians
function make_great(magicians: string[]): string[] {
    // Return a new array with "the Great" added to each magician's name
    return magicians.map(magician => `the Great ${magician}`);
}

// Call the function make_great with a copy of the array of magicians' names
let great_magicians: string[] = make_great([...magicians]);

// Call show_magicians with the original array of magician names
console.log("Original Magicians:");
show_magicians(magicians);

// Call show_magicians with the array of magicians' names with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
