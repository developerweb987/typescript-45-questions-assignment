// Define the array of locations
let placesToVisit: string[] = ["Dubai", "Sydney", "New york", "Dhaka", "Karachi"];

// Print original array
console.log("Original :" + placesToVisit);

// Print array in alphabetical order without changing the actual list
console.log("copy" + [...placesToVisit].sort());

// Show original order is unchanged
console.log("Original :" + placesToVisit);

// Print array in reverse alphabetical order without changing the original list
console.log("copy " + [...placesToVisit].sort().reverse());

// Show original order is still unchanged
console.log("copy " + [...placesToVisit].sort().reverse());

// Reverse the order of the list
console.log("Original :" + placesToVisit.sort());

// Reverse the order again to bring it back to the original order
console.log("Original :" + placesToVisit.sort().reverse());

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:" + placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:" + placesToVisit);
