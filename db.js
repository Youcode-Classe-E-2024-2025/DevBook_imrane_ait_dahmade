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

