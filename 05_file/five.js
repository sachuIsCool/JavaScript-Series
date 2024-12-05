const myNumers=[1,2,3,4,5,6,7,8]
//const newNums = myNumers.map( (num) => { return num + 10})
const newNums =myNumers.map( (num) => num * 10)
               
//console.log(newNums);

// adding these number in array
const myNums= [1,2,3,4,5]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval :${currval}`);
//     return acc +currval
// }, 0)
const myTotal = myNums.reduce( (acc,curr)=> acc+curr,0)
//console.log(myTotal);
const shoppingcard=[
    {itemName:"js course",
    price:4999
},
{
    itemName:"py course",
    price: 999
},
{
itemName: "c++ course",
price:29990
 },
]
 const priceTopay=shoppingcard.reduce( (acc,item)=> acc+item.price, 0)
console.log(priceTopay);