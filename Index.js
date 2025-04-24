



// 3yte le package ta3 express l installite 

const express = require("express");

// instancier dak express cree objet mno
const app = express();
//creat le port 
const port = 3000;
// hna create route 
app.get('/',(req,res)=>{

//    res.sendFile(__dirname + '/views/Welecom.html')
res.render('Welecom.ejs');
});

// hna aykhsna n active lweb server  had lfunction kadare mra whda 

app.listen(port ,()=>{
    console.log('i am listen');
})
