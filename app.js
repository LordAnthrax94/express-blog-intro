const express = require('express');
const app = express();
const port = 3000;
const myPost = require('./bacheca');

app.use(express.static('Public'));

app.get('/bacheca', (req, res)=>{  
  res.json({
    count: myPost.length,
    post: myPost
  });
})

app.listen(port, ()=>{
  console.log(`Sono in ascolto per il server sulla porta ${port}`);  
})

