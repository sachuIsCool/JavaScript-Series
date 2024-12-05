// primitive datatype

// 7 type : string,Number,Boolean ,Null ,Undefined, symbol,Big Int
const score=100
const scorevalue = 100.3
const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')
console.log(id === anotherId);
//const bigNumber = 23253645373738n

//refernce (Non primitive)

//Array,Obects,Functions
const heros =["thor","groot","rocketraccoon"]
let myobj =
{
    name: "sachin",
    age:22,
}
const myfunction =function()
{
    console.log("hello sachin");

}
console.log(typeof anotherId);
console.log(typeof myfunction);
console.log(typeof heros);
console.log(typeof scorevaule);
console.log(typeof outsideTemp);





// ******************************************//
//stack(primitive) and heap(NOn -primitive)


let myYoutubename="sachinkumar"

let anothername = myYoutubename
anothername="bhai"
console.log(myYoutubename);
console.log(anothername);

let user1  ={
    email: "user@google.com",
    upi: "user@ybl"
}
let  user2=user1
user2.email = "sachinkumar"

console.log(user1.email);
console.log(user2.email);



