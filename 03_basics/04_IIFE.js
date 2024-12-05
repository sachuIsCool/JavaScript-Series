//full form of IIFE= immediately invoked function Expression

function hotel()
{
    console.log(`DB CONNECTED`)
}
hotel();


(function hotel(){
    //named IIFE
    console.log(`DB CONNECTED`);

})();
((name)=>{
    //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);

})('SACHIN');
