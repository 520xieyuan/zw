const express = require('express');
let router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite");

router.get('/',  async (req, res) => {
    const commentList =  await getAllComments();
    res.jsonp(commentList);
})

function getAllComments() {

    return new Promise((resolve, reject) =>{
        db.serialize(  () => {
            db.all("SELECT * FROM comments", (err, rows) => {
                resolve(rows);
            })
        })
    });
}

module.exports = router;