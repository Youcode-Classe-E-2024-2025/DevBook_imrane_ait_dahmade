const db = require('../../db');


class Livre {
    constructor(name,content,auteur,catgorie) {
        this.name = name;
        this.content = content;
        this.auteur = auteur;
        this.catgorie = catgorie;
    }

    async All(){     
try{
    const result =await db.All('livres');
        console.log('i all recuperer ',result);
        return result;
}catch(err){
    console.log('erro il y a probleme ',err);
    return false;
}
    }

    async create(name,content,auteur,catgorie){
        try{
            const result = db.create('livres',{
                name,content,auteur,catgorie
            });
            console.log()
        }catch(err){
            console.log('i not created people want a book',err);
        }
    }

}
const ListeLivres = new Livre();
ListeLivres.All();

module.exports = Livre;