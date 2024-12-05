const user={
    username: "sachin",
    price : 999,
    welcomeMessage:function ()
    {
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this);



function hotel()
{
    console.log(this);
}
hotel()



//arrow function
const hotel1=() =>{
    let username ="sachin"
    console.log(this);
}
hotel1()




const addTwo =(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));
