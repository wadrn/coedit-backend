var pg = require('pg');
async function query(querySentence){
    try{
        const config = {
            host:'localhost',
            database:'test_db',
            user:'test',
            password:'test',
            port:5432,
            max:10,
            idleTimeoutMills:5000
        }
        const client = new pg.Client(config);
        return await new Promise(async function(resolve,reject){
            await client.connect();
            client.query(querySentence || '',function(err,res){
                if(err){
                    reject('error occured, ' + JSON.stringify(err));
                }
                console.log(res.rows);
                resolve(res.rows);
            })
        })
    }catch(err){
        return console.error('error occured');
    }
}
module.exports = {
    query: query
}