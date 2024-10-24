const express = require('express');
const app = express();
const port = 3000;

// Rota 1: Página Inicial
app.get('/', (req, res) => {
    res.send(`
        <h1>Página Inicial</h1>
        <p>Bem-vindo à nossa aplicação!</p>
        <a href="/sobre">Sobre</a> | <a href="/contato">Contato</a>
    `);
});

// Rota 2: Sobre
app.get('/sobre', (req, res) => {
    res.send(`
        <h1>Sobre</h1>
        <p>Esta é uma aplicação de exemplo construída com Node.js e Express.</p>
        <a href="/">Voltar para a Página Inicial</a>
    `);
});

// Rota 3: Contato
app.get('/contato', (req, res) => {
    res.send(`
        <h1>Contato</h1>
        <p>Entre em contato conosco pelo e-mail: contato@exemplo.com</p>
        <a href="/">Voltar para a Página Inicial</a>
    `);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});