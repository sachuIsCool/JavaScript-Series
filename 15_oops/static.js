class User{
    construtor(username){
        this.username=username
    }
    logme(){
        console.log(`Username:${this.username}`);
    }
    createId(){
        return `123`
    }
}
const sachin=new User("sachin")
console.log(sachin.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone =new Teacher ("iphone","i@phone.com")
console.log(iphone.createId());


