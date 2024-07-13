// Exercise 30

let usernames: string[] = ['admin', 'john', 'harry', 'charlie', 'david'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames}, thank you for logging in again.`);
    }
}
