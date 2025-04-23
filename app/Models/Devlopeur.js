const db = require('../demo_db_connection.js');

class Devlopeur {

    constructor(){
        this.id;
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
       const  query = `INSERT INTO devlopeurs (name,password) VALUES ($name,$password) returning *;`;
        const result = await db.query(query, [this.name, this.password]);
 
    }

  async  recupererDev(){
        const query = `Select * from devlopeurs where name = $name AND password = $password`;
        const  result = await db.query(query, [this.name,this.password]);
        return result;
    }
    

}