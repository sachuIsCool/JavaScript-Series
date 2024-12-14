// A prototype is an object that provides properties and methods for other objects to inherit.
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
//console.log(`My father's name is ${myFather.firstName} ${myFather.lastName}.`);
 //console.log(`My mother's eye color is ${myMother.eyeColor}.`);


 let myName= "sachin....."
 //console.log(myName.length);

 let myHeros = ["thor", "spiderman"];
let heropower = {
    thor: "hammer",
    spiderman: "sling",
};

// Adding a method to Object.prototype
Object.prototype.sachin = function () {
    console.log(`Sachin is present in all Objects`);
};

// Adding a method to Array.prototype
Array.prototype.heysachin = function () {
    console.log(`Sachin says hello`);
};

// Calling the methods
myHeros.sachin();    // Output: Sachin is present in all Objects
myHeros.heysachin(); // Output: Sachin says hello

heropower.sachin();  // Output: Sachin is present in all Objects
// heropower.heysachin(); // This will throw an error because heropower is not an array




//INHERITANCE
const Teacher = {
    makeVideo: true,
};

const TeacherSupport = {
    isAvailable: false,
};

const TASupport = {
    makeAssignment: "JS ASSIGNMENT",
    fullTime: true,
    __proto__: TeacherSupport, // Correct object reference
};

// Modern syntax to set prototype
Object.setPrototypeOf(TeacherSupport, Teacher);

// Adding a custom method to String.prototype
String.prototype.trueLength = function () {
    console.log(`The true length of "${this}" is ${this.length}`);
};

// Example usage
console.log(TASupport.isAvailable); // Output: false
console.log(TASupport.makeVideo);   // Output: true (inherited from Teacher)

// Testing the custom String.prototype method
"Hello, World!".trueLength();       // Output: The true length of "Hello, World!" is 13
