//Array
const myArr=[1,2,3,4]
//console.log(myArr.length);
//console.log(myArr);
//console.log(myArr[0]);
const myHeroes =["sachin","anupam","Harsh" ]
//console.log(myHeroes);
//console.log(myHeroes[0]);

//Array Method

myArr.push(6)
myArr.pop()
//console.log(myArr);

myArr.unshift(9)
console.log(myArr);
myArr.shift()


console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr);

const newArr =myArr.join()
console.log(newArr);
console.log(typeof newArr);


//slice ,splice
console.log("A ",myArr);
const mynew1 = myArr.slice(1,3)
console.log(mynew1);
console.log("B ",myArr);
const mynew2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(mynew2);

//splice() method adds new items to an array. 
//slice() method slices out a piece of an array.


const marvel_heros =["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash", "batman"]
marvel_heros.push(dc_heroes);
console.log(marvel_heros);
const allHeros= marvel_heros.concat(dc_heroes)
console.log(allHeros);


//spread operater
const all_new_heros =[...marvel_heros,...dc_heroes]
console.log(all_new_heros);
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array =another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("sachin"));
console.log(Array.from("Anu"));
console.log(Array.from({name:"Anu"}))//interesting

let score1 =200
let score2 =100
let score3 =300
console.log(Array.of(score1,score2,score3));
