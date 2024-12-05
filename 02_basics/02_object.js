//singleton

const mySym = Symbol("key1")

// object literals
const JsUser= { 
    name: "sachin",
    "full name": "sachin kumar"
   [mySym]="mykey1",
    age:21,
    location:"kerala",
    email : "sachinv21062003google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","saturday"]

}
console.log(JsUser.email)   
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email ="sachin kumar.com"
Object.freeze(JsUser)
JsUser.email= "sachin kumar.com"
console.log(JsUser);


JsUser.greeting =function()
{
    console.log("hello Js User");
}
console.log(JsUser.greeting);
JsUser.greetingTwo =function()
{
    console.log(`hello Js User,${this.name}`);
}
console.log(JsUser.greetingTwo());