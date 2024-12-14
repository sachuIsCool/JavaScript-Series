// //Es6
// //class User{
//     constructor(username,email,password ){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }
// }
// const chai=new User("chai","chai@gmail.com","123")
// //console.log(chai.encryptpassword());


// //Behind the scene
// function user(username,email,password )
// {
//     this.username=username;
//         this.email=email;
//         this.password=password
// }
// User.prototype.encryptpassword =function(){
//     return`${this.password} abc`
// }
// //console.log(user);



// class User{
//     constructor(username)
//     {
//         this.username=username
//     }
//     logMe(){
//         console.log(`USERNAMEis ${this.username}`);
        
//     }
// }
class User {
    constructor(username) {
        this.username = username;
    }

    logme() {
        console.log(`The username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username); // Call the parent class constructor
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// Create an instance of Teacher
const chai = new Teacher("chai", "chai@gmail.com", "123");
chai.addCourse(); // Output: A new course was added by chai

// Create an instance of User
const masalaChai = new User("masalaChai");
masalaChai.logme(); // Output: The username is masalaChai

// Check instanceof
console.log(chai instanceof User); // Output: true
