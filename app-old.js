
const http = require('http'); 
http.createServer( (req, res) =>{

    /**
     * Content-type indica al header que tipo de archivo retorna
     */


    // A) Texto Plano
    // res.writeHead(201, {'Contet-Type': 'text/plain'}); 
    // const test = 'Hola'
    // res.write(test)

    // B) Formato JSON
    // res.writeHead(201, {'Contet-Type': 'application/json'}); 
    // const persona = {
    //     id: 1,
    //     name: 'Persona'
    // }
    //  res.write(JSON.stringify(persona)); 


    //FORMATO CSV (excel)
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(201, {'Contet-Type': 'application/csv'}); 
    res.write( 'id, nombre\n'); 
    res.write( '1, Juan\n'); 
    res.write( '2, Pedro\n'); 
    res.write( '3, Joaco\n'); 
    res.write( '4, Martin\n'); 
    res.end(); 

}).listen( 8080 ); 

console.log('Escuchando peticiones en puerto', 8080);