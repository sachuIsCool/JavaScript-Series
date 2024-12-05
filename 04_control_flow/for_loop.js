//for
for (let i = 0; i < 10; i++) {
    const element = i;
    if(i==5){
        continue;
    }
    console.log(element);
    
}
//console.log(element);
for (let i = 0; i<=10; i++) {
    console.log(`outer loop value:${i}`);
   for (let j= 0; j<= 10; j++) {

    //console.log(`outer loop value:${j} and inner loop${i}`);
    console.log(i+ '*' +j + ' = ' + i*j);
   }
    
}


let myArray =["flash","batamn","superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}



// 

