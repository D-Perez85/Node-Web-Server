const express = require('express')
const app = express()
const port = 8080; 

// Serve static content
app.use(express.static('public'))

app.get('/hola-mundo',  (req, res) => {
  res.send('Hello World from get 01')
})
/**
 * dirname contiene el path, entonces concateno el resto de la ruta
 */
app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  })

app.listen(port, ()=>{
    console.log(`listen at port ${port}`);
}); 
