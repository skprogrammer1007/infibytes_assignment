const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const path=require('path')
const database = require('./database/connection')
const cors = require('cors');
app.use(cors({
    origin: "*",
}))

database();

app.listen(port, () => {
    console.log(`server is listened at localhost:${port}`)
})