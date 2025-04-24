// const db = require(__dirname + '/db.js');

class Devlopeur {

    constructor(name,password){
        this.id;
        this.name = name;
        this.password =password;
    }

  static async CreateTable(){

 let   query = `CREATE TABLE IF NOT EXISTS devlopeurs (
        id  SERIAL PRIMARY KEY ,
        name varchar(255) unique,
        password varchar(255),
        created_at TIMESTAMP DEFAULT NOW()
    )`;

  await db.query(query);

    }

    

   async createDev(){
       const  query = `INSERT INTO devlopeurs (name,password) VALUES ($name,$password) returning *;`;
        const result = await db.query(query, [this.name, this.password]);
 
    }

  async  recupererDev(){
        const query = `Select * from devlopeurs where name = $name AND password = $password`;
        const  result = await db.query(query, [this.name,this.password]);
        return result;
    }
    

  
}
module.exports = Devlopeur;