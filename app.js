const express = require('express');

const app = express();
app.get('/', (req,res) => {
    res.send('<h1>Hello I am From your backend</h1>')
})


app.listen(8000, () => {
    console.log("the port is running")
})