const mysql = require('mysql');

class Db {
    constructor(host, user, password, database) {
        this.config = {
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'devbook'
        };
    }

    CreateConnection() {
        this.connection = mysql.createConnection(this.config); 
        this.connection.connect(function(err) {
            if (err) {
                console.log('not connected');
                console.error('Erreur MySQL :', err);
            } else {
                console.log('connected');
            }
        });
    }
   async create(table,data){
    const keys = Object.keys(data); 
    const values = Object.values(data);

    const placeholders = keys.map(() => '?').join(', ')
    const query = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders})`;
    
    try {
        
        const result = await this.queryAsync(query, values); 
        console.log('Ligne insérée avec succès:', result);
        return result; 
      } catch (err) {
        console.error('Erreur lors de l\'insertion:', err);
        return false; 
      }

   }

   async find(table,data){
    const keys = Object.keys(data);
    const values = Object.values(data);
   

    const whereClause = keys.map(key => `${key} = ?`).join(' AND ');
    const query = `SELECT * FROM  ${table} where ${whereClause}`;

    try {
        const result  = await this.queryAsync(query,values);
        console.log('il trouver : ',result);
        return result;

    }catch(err){
    console.error('je ne trouver pas ' , err);
    return false;
    }
   }
   async All(table){
    const query = `SELECT * FROM ${table} `;

    try{
        const result = await this.queryAsync(query,null);
        console.log('this is All ' ,result );
        return result;
    }
    catch(err){
        console.log('i am not recuper  All i need my data ',err);
        return false ;
    }
   }
   async Update(table,data){
    

    const  {Column,NouvelleColumn,Condition , ConditionValue} = data;

        const query = `UPDATE  ${table} SET ${Column} =  ? WHERE ${Condition} = ? `;
        try{
            const result = await this.queryAsync(query, [NouvelleColumn, ConditionValue]);
            console.log('i am update ',result);
            return result;
        }catch(err){
            console.log(' i not update why ',err);
            return false ;
        }


   }
   async Delete (table,id){
  

        const query = `DELETE FROM ${table} WHERE id = ${id} `;
        try{
            // console.log(id , typeof(id));
            const result = await this.queryAsync(query,id);
            console.log('bien il est suprimer ');
            return result;         
        }catch(err){
            console.log('il y a probleme que delete non travaille');
            return false;
        }


   }
   async Filtrage(table ,key,value){
    const query = `SELECT * FROM ${table} WHERE ${key} = ${value}`;

    try{
        const result = await this.queryAsync(query , [key,value]);
        console.log('filtrage excute' );
return result;
    }catch(err){
        console.log(err);
        return false ;
    }

   }
   
   queryAsync(query, params) {
    return new Promise((resolve, reject) => {
      this.connection.query(query, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results); 
        }
      });
    });
  }
//     Connect(){
//         const connect = mysql.connect((err)=>{
//  if(err){
//     console.log('connection not work');
//  }
//  else {
//     console.log('bien est this connect ');
//  }
//         });
//     }

}

const db = new Db();
const creeconnect =  db.CreateConnection();



module.exports = db;

