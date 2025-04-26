

const { render } = require('ejs');

const Developer = require('../Models/Devlopeur');

class AuthController {   
//   name;
//   password;
//     // constructor(name,password){
//     //     this.name = name;
//     //     this.password = password;

//     // }


static FormLogin (req,res){

    res.render('Welecom.ejs');
}

static FormResigter (req,res){

    res.render('Register.ejs');
}


// login (req,res){
//     return res.render('')

// }

async register(req, res) {
    
    const { name, password } = req.body;

    try {
        const Dev = new Developer({ name, password });
        await Dev.create(name,password); 
     
        res.render('Welecom.ejs', { name });
    } catch (err) {
        console.error('Erreur lors de l’enregistrement :', err);
        res.status(500).send('Erreur lors de l’inscription');
    }
}

async Login(req, res) {
    const { name, password } = req.body;

    try {
        const Dev = new Developer();

        const result = await Dev.find(name, password); 
     res.send(result);
        if (result && result.length > 0) {
            res.render('home.ejs', { user: result[0] });
        } else {
            res.render('login.ejs', { error: 'Nom ou mot de passe incorrect' });
        }
    } catch (err) {
        console.error('Erreur lors de la connexion :', err);
        res.status(500).send('Erreur serveur');
    }
}


}





module.exports = AuthController;
