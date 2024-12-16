
// Getter and Setter in javacsript 

class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
return this._email.toUpperCase()
    }
    set email(value){
         this._email=value.toUpperCase()
    }
    get password(){
        return this._password.toLowerCase()//also use toUpperCase
    }
    set password(value){
        this._password=value.toLowerCase()
    }
}
const sachin=new User("sachin@gmail.com","12as3")
console.log(sachin.password);
console.log(sachin.email);