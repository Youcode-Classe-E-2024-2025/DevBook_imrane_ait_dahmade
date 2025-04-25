

const { render } = require('ejs');

const Developer = require('../Models/Devlopeur');

class AuthController {   


static FormLogin (req,res){

    res.render('Welecom.ejs');
}

// login (req,res){
//     return res.render('')

// }

    register(name,password){

       const Dev = new Developer;

       if( Dev.create(name,password)){
        render('Home.ejs');
       }
      
    }

}
console.log(AuthController.FormLogin);

const login = new AuthController().login('imrane','hello123');



// module.exports = AuthController;
