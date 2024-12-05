// this  is a singleton object
const tinderUser =new Object()
//console.log(tinderUser);


//this is a non singleton Object
const tinderUser1={}
//console.log(tinderUser1);

//
tinderUser.id ="123abc"
tinderUser.name ="sachin"
tinderUser.isLoggedIn =false
//console.log(tinderUser);

//object inside object
const regularUser ={
    email: "sachinkumar@gmail.com",
    fullname: {
        username:{
            firstname: "hit",
            lastname:"me"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.username);
console.log(regularUser.fullname.username.firstname);


//combine the object

const obj1 ={1: "a",2:"b"}
const obj2 ={3: "a",4:"b"}
const obj3={obj1,obj2}
console.log(obj3);

//https://www.w3schools.com/Jsref/jsref_object_assign.asp
//object assign mdn in javascript
 const obj4= {5:"a",6:"b"}
const obj5= Object.assign({},obj1,obj2,obj4)
console.log(obj5);
const obj6 ={...obj1,...obj2}
console.log(obj6)

//array object 
const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));//it give in array form 
console.log(Object.values(tinderUser));//it gives the true or false values.
console.log(Object.entries(tinderUser));// it gives the array inside array.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));
