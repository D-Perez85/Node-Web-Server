const express = require('express')
const hbs = require('hbs');
const app = express(); 
const port = 8080; 

// Add of engine view using handlebars
app.set('view engine', 'hbs'); 
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public')); 

app.get('/',  (req, res) => {
  res.render('home', {
  nombre: 'Damian Perez', 
  titulo: 'Probando args'
  })
})

app.get('/generic',  (req, res) => {
  res.render('generic', {
    nombre: 'Damian Perez', 
    titulo: 'Probando args'
    })
})

app.get('/elements',  (req, res) => {
  res.render('elements', {
    nombre: 'Damian Perez', 
    titulo: 'Probando args'
    })
})


app.listen(port, ()=>{
    console.log(`listen at port ${port}`);
}); 
