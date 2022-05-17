const express = require('express')
const app = express()
const port = 8080; 
// Add of engine view using handlebars
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/',  (req, res) => {
  res.render('home')
})

app.get('/generic',  (req, res) => {
  res.render('generic')
})

app.listen(port, ()=>{
    console.log(`listen at port ${port}`);
}); 
