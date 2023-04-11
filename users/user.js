const express = require('express');
let router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite");

router.get('/', (req, res) => {
    console.log(1)
    let userList = [];
    db.serialize(  () => {
        let ress =  db.each("SELECT * FROM users", (err, row) => {
            // console.log(row);
            userList.push(row);
        })
        console.log(ress);
    })
    // db.close();

    res.send(userList);
})

module.exports = router;