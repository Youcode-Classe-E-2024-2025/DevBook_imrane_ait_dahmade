const db = require('../demo_db_connection.js');

class Devlopeur {

    constructor(){
        this.name;
        this.password;
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
       let  query = `INSERT INTO devlopeurs (name,password) VALUES ($name,$password) returning *;`;
        const result = await db.query(query, [this.name, this.email]);
        
    }
}