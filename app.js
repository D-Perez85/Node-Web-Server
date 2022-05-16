
const http = require('http'); 
http.createServer( (req, res) =>{
    //status: el nro se asocia al codigo de la peticion
    // res.writeHead(404); 
    // res.write('404 | Page Not found'); 

    //ejemplo: 201 es un status de archivo creado
    res.writeHead(201); 
    res.write('File Created')

    //esto le indica a mi Back End que termine el proceso de peticion
    res.end(); 
})
.listen( 8080 ); 

console.log('Escuchando peticiones en puerto', 8080);