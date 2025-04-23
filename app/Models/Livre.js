const db  = require('../demo_db_connection.js');



class Livre {

constructor(){
    this.id;
    this.name;
    this.content ;
    this.categorie_id;
}

    async createtable(){
   const   query = ` CREATE TABLE IF NOT EXIST livres (
     id SERIAL PRIMARY KEY ,
     name varchar(255) ,
    content varcher(255),
    categorie_id int ,
    foreign key categorie_id reference id from categories 
     )`;

     const result = db.query(query);
    }

    async createlivre(){
    const query = ` INSERT INTO TABLE livres (name, content ,categorie_id) VALUES ($name,$content,$categorie)`;
    const result =  db.query(query);
        return console.log('hllo');
    }


}