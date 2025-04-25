

const { render } = require('ejs');

const Developer = require('../Models/Devlopeur');

class AuthController {   


static FormLogin (req,res){

    res.render('Welecom.ejs');
}

// login (req,res){
//     return res.render('')

// }

    register(req,res){

        const {name , password} = req.body;

       const Dev = new Developer();
   
       if(Dev.create(name,password)){
        res.render('Welecom.ejs');
       }
       else {
     res.send('error');
       }
    }

}




module.exports = AuthController;
