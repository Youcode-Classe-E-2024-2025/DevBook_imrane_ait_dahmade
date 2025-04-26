const db = require('../../db');


class Livre {
    constructor(name,content,auteur,catgorie) {
        this.id;
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

    async create(name,content,auteur_id,categorie_id){
        try{
            const result = db.create('livres',{
                name,content,auteur_id,categorie_id
            });
            console.log('cree livre ',result);
            return result
        }catch(err){
            console.log('i not created people want a book',err);
            return false ;
        }

    }
    async update(id){
        
    }
    

}
const ListeLivres = new Livre();
ListeLivres.create('imrane','hello i am imrane ',57,1);


module.exports = Livre;