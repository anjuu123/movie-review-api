const express = require('express');
const userRouter = require('./routes/user')

const app = express();
app.use('/api', userRouter);



app.listen(8000, () => {
    console.log("the port is running")
})