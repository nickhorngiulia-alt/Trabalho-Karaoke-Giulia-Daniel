/* Serviço web com o framework Express.js
*
* Deve servir opções para requisições de Musica e partes dela
 */
//GET musica/letra

//GET musica/parte/:id

const express = require('express');
const app = express();

app.get('/', function(req,res){
    const html = "<html> <body> <b> 'Hello Turma de Terça' </b> </body> </html>"
    res.contentType("text/html");
    res.send(html)
})
app.listen(3001);