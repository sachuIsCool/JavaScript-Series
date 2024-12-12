//object literal

// const User ={
//     Username:"Sachin",
//     loginCount:8,
//     signedIn:true,
//     getUserDetails:function(){
// console.log("Got the User details from database");
//     }
// }
// console.log(User.Username);
// console.log(User.getUserDetails());


//constructor function

function User(username,loginCount,isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
}
const user1 = new User("sachin",12,true);
const user2 =  new User("Kumar",11,false);
console.log(user1);
console.log(user2);

