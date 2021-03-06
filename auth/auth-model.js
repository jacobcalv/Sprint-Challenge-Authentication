const db = require('../database/dbConfig')

module.exports = {
    add, 
    find,
    findBy,
    findById
};

function find() {
    return db('users').select('id', 'username')
};

function findBy(param) {
    return db('users').where(param)
};

async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id)
};

function findById(id) {
    return db('users').where({id}).first();
}