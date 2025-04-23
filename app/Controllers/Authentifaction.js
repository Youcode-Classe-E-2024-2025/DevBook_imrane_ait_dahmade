const Devlopeur = require('../Models/Devlopeur');




class Auth {
 
    constructor(name,password){
            this.name;
            this.password;
    }



  Register(name,password){
    const User = new Devlopeur(name,password).CreateTable();
    
   
            const recupere = User.recupererDev();
        if(!recupere){
            User.createDev();
        }
        else{
            return console.log ('il est existe ');
        }
        

}

}


