const express = require('express')
const router = express.Router()
const userRouter = require('./users/user')
const postRouter = require('./posts/post')
const commentRouter = require('./comments/comment')
const app = express()
const port = 3000


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);


app.use(function (req, res) {
    res.send('404 not found');
});