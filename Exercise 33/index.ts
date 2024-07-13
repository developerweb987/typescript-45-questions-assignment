// Exercise 33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through array
for (let number of numbers) {
 
    // Determine ordinal ending
    let ordinal: string;
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }

    console.log(`${number}${ordinal}`);
}
