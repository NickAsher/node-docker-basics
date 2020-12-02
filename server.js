const express = require('express') ;

let app = express() ;

app.get('/', (req, res)=>{
  res.send("<h1> This is the home page </h1>") ;
}) ;

app.get('/about', (req, res)=>{
  res.send("<h1> This is the About page </h1>") ;
}) ;

app.listen(3099, ()=>{
  console.log("The server is listening on port 3099") ;
}) ;