// List of current users
let current_users: string[] = ["Rehan", "Babar", "Raju", "Anas", "Hasan"];

// List of new users
let new_users: string[] = ["Sana", "Arman", "Fawad", "Noureen", "Hamid"];

    new_users.forEach((newuser) => {
     if (
        current_users.some(
            (currentuser) => currentuser.toLowerCase() === newuser.toLowerCase()
        )

     ) {

        console.log(`${newuser} will need to enter a new username. `);
     } else {
        console.log(`${newuser} is available. `);
     }
    });