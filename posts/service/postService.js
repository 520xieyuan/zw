const sqlite3 = require('sqlite3').verbose();

class PostService {

    constructor() {
        this.db = new sqlite3.Database("./data.sqlite");
    }


    getAllPosts() {
        return new Promise((resolve, reject) =>{
            this.db.serialize(  () => {
                this.db.all("SELECT * FROM posts", (err, rows) => {
                    resolve(rows);
                })
            })
        })
    }

    getSinglePost(postID) {
        return new Promise((resolve, reject) =>{
            this.db.serialize(  () => {
                this.db.get(`SELECT * FROM posts WHERE id = ${postID}`, (err, row) => {
                    resolve(row);
                })
            })
        })
    }
}

module.exports = new PostService();