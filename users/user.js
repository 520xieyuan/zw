const express = require('express');
let router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite");

router.get('/',  async (req, res) => {
    const userList =  await getAllUsers();
    res.jsonp(userList);
})

function getAllUsers() {

    return new Promise((resolve, reject) =>{
        db.serialize(  () => {
         db.all("SELECT * FROM users", (err, rows) => {
                resolve(rows);
            })
        })
    })
}

module.exports = router;