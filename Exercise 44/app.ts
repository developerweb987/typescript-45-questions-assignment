// Exercise 44

function make_sandwich(...items: string[]){
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("flour", "Cheese");
make_sandwich("tomato", "Olive","Ketchup","mayo");
make_sandwich("avocado", "mustard", "chicken", "Garlic");
