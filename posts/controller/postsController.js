const express = require('express');
let router = express.Router();
const postService = require('../service/postService')


router.get('/',  async (req, res) => {
    const postList =  await postService.getAllPosts();
    res.jsonp(postList);
})

router.get('/:postID',  async (req, res) => {
    if (req.params.postID) {
        const post =  await postService.getSinglePost(req.params.postID);
        res.jsonp(post);
    }

    res.jsonp("Cannot Found Post");

})

module.exports = router;