const express = require('express')
const router = express.Router()
const userRouter = require('./users/user')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.use('/users', userRouter);


app.use(function (req, res) {
    res.send('404 not found');
});