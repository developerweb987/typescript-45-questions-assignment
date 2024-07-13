// Exericse 45

function make_car(manufacture: string, model: string, ...options: [string, any][]):object {
    let car = { manufacture, model};
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Honda", "Toyota", ["color", "black"], ["year", 2022]));
console.log(make_car("BMW", "Audi", ["color", "White"], ["sunroof", true]));
