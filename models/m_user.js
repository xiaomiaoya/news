const connection = require('../config/db_config');

exports.checkEmail = (email, callback) => {

    const sqlstr = 'SELECT * FROM `users` WHERE email = ?';
    connection.query(sqlstr, email, 
        (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    })
}