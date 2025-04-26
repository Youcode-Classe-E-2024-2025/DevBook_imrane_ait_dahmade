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
        const connection = mysql.createConnection(this.config);
        connection.connect(function(err) {
            if (err) {
                console.log('not connected');
                console.error('Erreur MySQL :', err);
            } else {
                console.log('connected');
            }
            
        });
        return connection; 

    }
//    async create(table,columns){
//     const keys = columns.keys;
//     const Values = columns.values;

//     const placeholders = keys.map(() => '?').join(', ')
//     const query = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders})`;
    
//     try {
        
//         const [result] = await this.queryAsync(query, values); 
//         console.log('Ligne insérée avec succès:', result);
//         return result; 
//       } catch (err) {
//         console.error('Erreur lors de l\'insertion:', err);
//         return false; 
//       }

//    }
//    queryAsync(query, params) {
//     return new Promise((resolve, reject) => {
//       this.connection.query(query, params, (err, results) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(results); 
//         }
//       });
//     });
//   }
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

