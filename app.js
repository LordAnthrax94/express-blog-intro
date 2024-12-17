const express = require('express');
const app = express();
const port = 3000;
const myPost = require('./post');

app.use(express.static('Public'));

app.get('/', (res, req)=>{
  res.json(myPost)
})

app.listen(port, ()=>{
  console.log(`Sono in ascolto per il server sulla porta ${port}`);  
})