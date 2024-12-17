const express = require('express');
const app = express();
const port = 3000;

app.get('/', (res, req)=>{
  res.send('Server del mio Blog')
})

app.listen(port, ()=>{
  console.log(`Sono in ascolto per il server sulla porta ${port}`);  
})