function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(', '), "."));
}
make_sandwich("flour", "Cheese");
make_sandwich("tomato", "Olive", "Ketchup", "mayo");
make_sandwich("avocado", "mustard", "chicken", "Garlic");
