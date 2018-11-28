var pos_query = require('../postgres').query;
const sql = require('../database/sql');

async function getAllDocName(req,res){
    try{
        var Docs = await pos_query(sql.query_all_docname());
        if(Docs instanceof Array){
            res.status(200).send({
                Docs
            });
        }else{
            throw "error in query"
        }
    }catch(err){
        res.status(200).send({
            error:'error occured'
        })
    }
}
module.exports = {
    getAllDocName: getAllDocName
}