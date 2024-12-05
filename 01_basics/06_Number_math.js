const score =400
console.log(score);
const balance =new Number(10)
console.log(balance);
console.log(balance.toString().length);
//precision  Value
console.log(balance.toFixed(2));

// toprecision give the appox value.
const otherNumber =123.8966
console.log(otherNumber.toPrecision(3));


//tolocaleString give the comma
const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));


//*********Math**** */
console.log(Math);
console.log(Math.abs(-4.6));

console.log(Math.round(4.6));

console.log(Math.ceil(4.2));
// Math.ceil the round figure like 4.6=5
console.log(Math.floor(4.9));
console.log(Math.min(4,9,6,7));


console.log(Math.random());
console.log(Math.random()*10+5); 
const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min);
