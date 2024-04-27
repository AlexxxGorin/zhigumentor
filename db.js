const Pool = require('pg').Pool
const pool = new Pool({
    user: 'gen_user',
    password: 'vWZ!4&pe9E}*y4',
    host: '82.97.254.160',
    port: '5432',
    database: 'default_db'
})


module.exports = pool