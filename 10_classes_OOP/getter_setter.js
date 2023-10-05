class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

      // getter and setter name should be same as properties
      get email(){
        return `${this._email.toLowerCase()}.Tech`
      }

      set email(value){
        this._email = value
      }


     get password(){
        return `${this._password}unknown`
     }

     set password(val){
         this._password = val
     }
}
 

const unknown = new User("TechBoy@gmail.com",12345)
console.log(unknown.password);
console.log(unknown.email);