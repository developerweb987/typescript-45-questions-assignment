// Exercise 37

// Define the function make_shirt
function make_shirt(size: string = "Large", message: string = "I Love Typescript"){
    console.log(`The shirt size is ${size} and the message on the shirt is: "${message}"`);
}

// Call the function with sample arguments
make_shirt();
make_shirt("medium");
make_shirt("small", "Code is Life!");
