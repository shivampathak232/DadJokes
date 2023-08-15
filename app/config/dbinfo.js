const sqlite = require('sqlite3').verbose();

const myDB = new sqlite.Database('./jokesDB.db', sqlite.OPEN_READWRITE, (err) => {
    if (err){
        console.log(err);
    }
    else {
        console.log('connected to DB');
    }
});

module.exports = myDB;