// Exercise 38

// Define the function describe_city
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function with different cities
describe_city("Karachi"); 
describe_city("Lahore"); 
describe_city("London", "United Kingdom"); 
