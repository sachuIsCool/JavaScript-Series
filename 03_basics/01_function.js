//function
function saymyName()
{
   // console.log("S");
    //console.log("a");
    //console.log("c");
    //console.log("h");
    //console.log("i");
    //console.log("n");

}
console.log(saymyName());
saymyName()
//Both are same



//function with object

function addtwoNumber(num1,num2)
{
let result =num1+num2
console.log("sachin");
return result
}
const result =addtwoNumber(2,3);
console.log("RESULT:",result);

function LoginUser(username){
    return `${username} just logged`
}
console.log(LoginUser("sachin"))
console.log(LoginUser())

function loginUser(username)
{
    if(username== undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUser("sachin"))





function calculateCartPrice(...num1)//...rest operated
{
return num1
}
console.log(calculateCartPrice(200,300,400,500));

const user ={
    username: "sachin",
    prices:200
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and  prices is ${anyObject.prices}`);
}
handleObject(user);




//function with Array
const myNewArray= [200,300,400,500]
function returnsecondValue(getArray){
    return getArray[1]
}
console.log(returnsecondValue(myNewArray));
