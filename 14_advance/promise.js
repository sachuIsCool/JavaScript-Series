const promise1 = new Promise(function(resolve,reject){


    //DO an async task
    //DB calls,crypotography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000);
});
promise1.then(function(){
    console.log("promise consumed");
    
});


const promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000);
    })
    promise2.then(function(){
        console.log("async 2 resolve");
        
    });





    const promise3=new Promise(function(resolve,reject){
        setTimeout(function(){
    let error =true
    if(!error){
        resolve({username:"sachin",password:"1234"})
    }
    else{
        reject('Error: Something went Wrong')
    }
        },1000);
        })
    const username=promise3.then((user)=>{
            console.log(user);
            return user.username
        }).then((username)=>{
            console.log(username);
            
        }).catch(function(error){
            console.log(error);
        }).finally(()=>console.log("The promise is either resolved or rejected"))
       


const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"sachin",password:"1234"})
        }
        else{
            reject('Error: JS went Wrong')
        }
            },1000);
            })

        async function consumePromise5(){
try{
    const response =await promise5
    console.log(response);
}
catch (error){
    console.log(error);
}
}
consumePromise5()
    
async function getAllUsers(){
    try{
    const response=await fetch ('https://jsonplaceholder.typicode.com/users')
    const data=response.json()
    console.log(data);
}
catch(error){
    console.log("E:",error);
    
}
}
getAllUsers()




        // //4 promise
        // const promise5=new Promise(function(resolve,reject){
        //     setTimeout(function(){
        
        //         resolve({username:"sachin",email:"sachinkumarv007@gmail.com"});
        //     },1000);
        //     })
        // promise5.then(function(user){
        //         console.log(user);
                
        //     });

