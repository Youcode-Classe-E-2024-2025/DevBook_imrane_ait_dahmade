
const db = require('../../db');

class Devlopeur {
  constructor(name) {
    this.name = name;
    this.password;
    this.id;
  }



  async create(name, password) {
    try {
      const result = await db.create('devlopeurs', { name, password });
      console.log('Développeur inséré avec succès:', result);
      return result;
    } catch (err) {
      console.error('Erreur lors de l\'insertion du développeur:', err);
      return false;
    }
  }

  async find(name, password) {
    try {
      const result = await db.find('devlopeurs', { name, password });
      console.log('i am find my self', result);
      return result;
    }
    catch (err) {
      console.log('hi i am not found ', err);
      return false;
    }
  }

}

// const CreatePromise = new Promise((resolve,rejected)=>{
//  const issuccess = true;
//   if(issuccess){
//    setTimeout(() => {
//     console.log('hello i am created ');
//     resolve();
//    }, 1000);

//   }
//   else {
//     console.log('i am sorry but i am error');
//     rejected();
//   }

// });

// CreatePromise.then(function(){
//   console.log('i am happy ')})
//   .catch(function (err) {
//     console.log('error ' ,err)
//   });


const dev = new Devlopeur();
const h = dev.find('holls', 'nammi');
module.exports = Devlopeur;