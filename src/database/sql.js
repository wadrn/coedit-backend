const Query = require('pg').Query;

const query_all_docname = () => "SELECT * FROM docs";

module.exports = {
    query_all_docname
}