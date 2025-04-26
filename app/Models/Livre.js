const db = require('../../db');


class Livre {
    constructor(name, content, auteur, catgorie) {
        this.id;
        this.name = name;
        this.content = content;
        this.auteur = auteur;
        this.catgorie = catgorie;
    }

    async All() {
        try {
            const result = await db.All('livres');
            console.log('i all recuperer ', result);
            return result;
        } catch (err) {
            console.log('erro il y a probleme ', err);
            return false;
        }
    }

    async create(name, content, auteur_id, categorie_id) {
        try {
            const result = db.create('livres', {
                name, content, auteur_id, categorie_id
            });
            console.log('cree livre ', result);
            return result
        } catch (err) {
            console.log('i not created people want a book', err);
            return false;
        }

    }
    async update(conditionColumn, conditionValue, updateColumn, newValue) {
        try {
            const result = await db.Update('livres', {
                Column: updateColumn,
                NouvelleColumn: newValue,
                Condition: conditionColumn,
                ConditionValue: conditionValue
            });
            console.log('i am updated', result);
            return result;
        } catch (err) {
            console.log('i am not updated, I have a problem', err);
            return false;
        }
    }
    async Delete(id) {
        try {
            const result = db.Delete('livres',id);
            console.log('i am deleted ', result);
            return result;

        } catch (error) {
            console.log('non error he is not want to delete ');
            return false;
        }
    }
    async find(id){
        try{
            const result = db.find('livres',{id});
            console.log('i am here ',result);
            return result;
        }catch(error){
            console.log('i am not fount what you need',error);
            return false ;
        }
    }
    async Filtrage(KeyCondition,Condition){
        try{
            const result = await db.Filtrage('livres',KeyCondition,Condition);
            console.log('filter par :',result);
            return result;
        }catch(err){
            console.log('error ');
            return false;
        }
    }
    
}
// const filter = new Livre;
// filter.Filtrage('categorie_id',1);


module.exports = Livre;