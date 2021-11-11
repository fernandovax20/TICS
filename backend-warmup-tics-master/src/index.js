const http = require('http')
const express = require('express');

const calculatorRouter = require('./routers/calculator');

const app = express();
const server = http.createServer(app);

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.use('/api', calculatorRouter);
app.get('/',(req, res)=>{
    res.send("Welcome to AFP api");
});

server.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});
