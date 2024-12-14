// Function with a property
function multiplyBy5(nums) {
    return nums * 5;
}
multiplyBy5.power = 2; // Adding a property to the function

console.log(multiplyBy5(5));       // Output: 25
console.log(multiplyBy5.power);   // Output: 2
console.log(multiplyBy5.prototype); // Output: {}

// Constructor function with prototypes
function CreateUser(username, score) {
    this.username = username;
    this.score = score;
}

CreateUser.prototype.increment = function () {
    this.score++;
};

CreateUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);
};

// Creating new instances
const chai = new CreateUser("chai", 34);
const tea = new CreateUser("tea", 23);

chai.printMe(); // Output: Score is 34
tea.increment(); // Incrementing score for tea
tea.printMe();   // Output: Score is 24
