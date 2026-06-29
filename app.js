//importações dos objetos locais
const {boompala, play} = require('./karaoke/player');;
console.log(`Título da música: ${boompala.nome}`)

// 1. Importar o Express
const express = require('express');

// 2. Criar a aplicação (a "loja")
const app = express();

// 3. Configurar middlewares (pré-processamento)
app.use(express.json());

// 4. Definir rotas (os "balcões de atendimento")
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.get('/teste', (req, res)=>{
    res.contentType('html');
    const html = "<html> <body> <b>Este é o meu site Express.js. </body> <html> "
    res.send(html);
});

app.post('/testePost', (req,res) => {

} );

/*
*API da música
* GET /musica/:id -> retornar a música inteira
* GET /musica/id/nome -> nome da música
* GET  /musica:id/:parte -> retornar parte da música
*/
//GET /musica/:id -> retornar a música inteira
app.get('/boompala/:id', (req, res) => {
    const id = req.params.id;
    if(id != 0){
        return res.status(404).send('Música não encontrada.');
    }
    const musicaJSON = JSON.stringify(boompala); // transformar js em string json
    //res.JSON(musicaJSON);
    res.contentType('application/json');
    res.send(musicaJSON);
})

// GET /musica/:id/nome -> nome da música
app.get('/boompala/:id/titulo', (req, res) => {
    const id = req.params.id;
    if(id != 0){
        return res.status(404).send('Música não encontrada.');
    }
    res.send({titulo: boompala.nome});
})

//GET  /musica:id/:parte -> retornar parte da música
app.get('/boompala/:id/parte/:parte', (req, res) => {
    const id = req.params.id;
    const parte = req.params.parte;
    if(id != 0){
        return res.status(404).send('Música não encontrada.');
    }
    const parteParaRetornar = boompala.partes[parte];
    res.contentType('application/json')
    res.send(JSON.stringify(parteParaRetornar));
})

//GET /musica/:id -> retornar a música inteira
app.get('/player/:id/play', (req, res) => {
    play();
    res.send('Música reproduziu no servidor!')
})

// 5. Abrir a loja (escutar a porta)
app.listen(5500, () => {
    console.log('Servidor rodando em http://localhost:5500');
});

//git config --global user.email "you@example.com"
//git config --global user.name "Your Name"