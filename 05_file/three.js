
//for Each

const coding=["js","cPP","python"]

coding.forEach(function (item){
   // console.log(item);
    
})

coding.forEach((item)=>{
    //console.log(item);
})

function printMe(item){
    //console.log(item);
}

coding.forEach(printMe)
coding.forEach((item,index,arr)=>{
//console.log(item,index,arr);
})

const mycoding =[
    {
        languageName:"javascript",
        languagefileName:"js"
    },
    {
        languageName:"c++",
        languagefileNmae:"cpp"
    }
]
console.log(mycoding);