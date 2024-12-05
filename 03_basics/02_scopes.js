let a=10
const b=20
var c=40
//console.log(a);
//console.log(b);
//console.log(c);


var c =300
if(true){
    let a=10
    const b=20
    var c=30
   // console.log("INNER:",b);
}
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username ="sachin"
    function two()
    {
        const website ="youtube"
    //console.log(username);
}
//console.log(website);
two()
}
//one()

if(true)
{
    const username ="hitesh"
    if(username ==="sachin"){
        const website ="youtube"
        //console.log(username+website);
    }
    //console.log(wesite);
}
//console.log(username);



//**************************INTERESTING*******************/
function  addone(num){
    return num+1
}
console.log (addone(5));

const addTwo =function(num){
    return num+2
}
console.log(addTwo(6));

