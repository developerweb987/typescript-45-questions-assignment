// Define the function describe_city
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function with different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("London", "United Kingdom");
