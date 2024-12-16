const User={
    _email:'s@dfg.com',
    _password:"sgg",

get email(){
    return this._email.toUpperCase()
},
set email(value)
{
    this._email=value

}
}
const tea=Object.create(User)
console.log(tea.email);