var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the array of locations
var placesToVisit = ["Dubai", "Sydney", "New york", "Dhaka", "Karachi"];
// Print original array
console.log("Original :" + placesToVisit);
// Print array in alphabetical order without changing the actual list
console.log("copy" + __spreadArray([], placesToVisit, true).sort());
// Show original order is unchanged
console.log("Original :" + placesToVisit);
// Print array in reverse alphabetical order without changing the original list
console.log("copy " + __spreadArray([], placesToVisit, true).sort().reverse());
// Show original order is still unchanged
console.log("copy " + __spreadArray([], placesToVisit, true).sort().reverse());
// Reverse the order of the list
console.log("Original :" + placesToVisit.sort());
// Reverse the order again to bring it back to the original order
console.log("Original :" + placesToVisit.sort().reverse());
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:" + placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in Reverse Alphabetical Order:" + placesToVisit);
