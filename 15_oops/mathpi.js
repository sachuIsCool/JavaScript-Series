console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);


const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

const chai={
    name:'ginger chai',
    price:'230',
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptors(chai));

Object.defineProperty(chai,'name',{
writable:false,
enumerable:false
})
console.log(Object.getOwnPropertyDescriptors(chai,"name"));

for (let  [key,value] of Object.entries(chai)){
console.log(`${key}:${value}`);

}
    

