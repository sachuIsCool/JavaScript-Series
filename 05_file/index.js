//for of loop


const arr =[1,2,3,4,5]
    for (const num of arr)
    {
console.log(num);
    }


   const greeting= "hello world"
   for(const greet of greeting){
    console.log(`Each char is ${greet}`)
   } 

  //maps in javascript 

  const map =new Map()
  map.set('IN',"INDIA")
  map.set('FR',"FRANCE")
  map.set('Sh',"FRANCE")
  //console.log(map);

  for(const [key,value] of map)
  {
console.log(key,':-',value);
  }




   