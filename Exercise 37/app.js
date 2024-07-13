// Define the function make_shirt
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("The shirt size is ".concat(size, " and the message on the shirt is: \"").concat(message, "\""));
}
// Call the function with sample arguments
make_shirt();
make_shirt("medium");
make_shirt("small", "Code is Life!");
