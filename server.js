const express = require('express') ;
let app = express() ;


app.get('/', (req, res)=>{
  res.send("<h1> This is the home page </h1>") ;
}) ;

app.get('/about', (req, res)=>{
  res.send("<h1> This is the About page </h1>") ;
}) ;

const PORT = 3099 ;
const HOST = "0.0.0.0" ;

app.listen(PORT, HOST, ()=>{
  console.log("The server is listening on port 3099") ;
}) ;