const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const port=8000;

server.listen(8000, ()=>{
    console.log(`server listning at port ${port}`)
})

app.get('/name', (req, res)=>{
    res.end('its Vinayak')
})


