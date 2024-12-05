
// if

if(2!=3){
//console.log("executed");
}


//  <,>,<=,>=,==,!=,===,!==

const temperature =41
if (temperature<=41)
{
    console.log("less than 50");
}
else{
console.log("temperature is greater than 50");
}


const score =200
if(score >100)
{
    const power="fly"
    console.log(`User power:${power}`);
}
//console.log(`User power:${power}`);




const balance =1000
if(balance<500)
{
    console.log("less than 500");
}
else if(balance <750)
{
    console.log("less than 750");
}
else if(balance<950){
    console.log("less than 950");
}
else(balance<1200) 
    console.log("less than Balance 1200");



    const userLoggedIn =true
    const debitCard =true
    const loogedInFromGoogle=false
    const loggedInFromEmail= true
    if(userLoggedIn && debitCard  && 2==3)
    {
console.log("Allow to buy course");
    }
    if(loogedInFromGoogle || loggedInFromEmail)
    {
        console.log("user logged in");
    }




