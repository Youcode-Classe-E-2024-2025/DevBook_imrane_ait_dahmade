

const { render } = require('ejs');
const Devlopeur = require('../Models/Devlopeur');



class AuthController {   


static FormLogin (req,res){

    res.render('Welecom.ejs');
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
    login(name,password){
            
    }

}
console.log(AuthController.FormLogin);

module.exports = AuthController;
