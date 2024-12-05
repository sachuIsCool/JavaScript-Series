const name ="sachin"
const repocount =100
//console.log(name +repocount+"value");



// modern way  syntax   

console.log(`hello my name is ${name}  and my repo count is ${repocount}`);


//string declare in another way
const gameName =new String("sachin-sa")
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString =gameName.slice(-6,2)
console.log(anotherString);


const newStringOne = "    sachin    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://sachin.com/sachin#30kumar"
console.log(url.replace('#30 ','-'))
    console.log(url.includes('sunder'))
    console.log(gameName.split('-'))

// in split there is a ('-') separator and many other separator
// trim in javascript  :  "https://www.w3schools.com/jsref/jsref_trim_string.asp"
// split method in javascript : "https://www.w3schools.com/jsref/jsref_split.asp"
//string method in javscript : "https://www.w3schools.com/js/js_string_methods.asp"