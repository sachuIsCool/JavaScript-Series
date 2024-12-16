function User(email, password) {
    // Internal properties
    this._email = email;
    this._password = password;

    // Define getter and setter for 'email'
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase(); // Return email in uppercase
        },
        set: function (value) {
            this._email = value; // Assign new value to _email
        },
    });

    // Define getter and setter for 'password'
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase(); // Return password in uppercase
        },
        set: function (value) {
            this._password = value; // Assign new value to _password
        },
    });
}

// Create a new user instance
const sachin = new User("sachinkumar@gmail.com", "12as3");

// Access the properties
console.log(sachin.password); // Output: "12AS3"
console.log(sachin.email);    // Output: "SACHIN@GMAIL.COM"

// Modify the properties using setters
// sachin.password = "newPassword";
// sachin.email = "newemail@gmail.com";

// console.log(sachin.password); // Output: "NEWPASSWORD"
// console.log(sachin.email);    // Output: "NEWEMAIL@GMAIL.COM"

