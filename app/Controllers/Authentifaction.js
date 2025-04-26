

const { render } = require('ejs');

const Developer = require('../Models/Devlopeur');
// const devlopeur = require('../Models/Devlopeur');

class AuthController {



    async register(name, password) {

        try {
            const Exist = Developer.find({ name: name });
            if (Exist) {
               
                return { success: false, message: 'User already exists.' };
            }
            const hachPassword = await bcrypt.hash(password, 10);
            const Excute = await Developer.create(name, hachPassword);
        
            return { success: true, message: 'he is created ' }
        } catch (error) {
            console.log('error:', error);


        }

    }









    static FormLogin(req, res) {

        res.render('Welecom.ejs');
    }

    static FormResigter(req, res) {

        res.render('Register.ejs');
    }


    // login (req,res){
    //     return res.render('')

    // }




}


// const test = new AuthController;




module.exports = AuthController;
