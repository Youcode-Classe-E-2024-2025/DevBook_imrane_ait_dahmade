// 3yte le package ta3 express l installite 
const express = require("express");
// instancier dak express cree objet mno
const app = express();
//creat le port 
const port = 3000;

const Routes = require('./routes/Route');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'app/views'));

app.use('/',Routes);


// // hna create route 
// app.get('/',(req,res)=>{

// //    res.sendFile(__dirname + '/views/Welecom.html')
// res.render('Welecom.ejs');
// });

// // hna aykhsna n active lweb server  had lfunction kadare mra whda

// app.get('/', (req, res) => {
//     res.render('Welecom');
//   });

app.listen(port ,()=>{
    console.log('i am listen');
})
