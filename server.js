const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

let usuarios = []; 
let estoque = [
    { nome: "Polvilho", validade: "2026-04-26" } // Exemplo da imagem [1]
];
let historicoVendas = [];

// Autenticação
app.post('/api/cadastro', (req, res) => {
    usuarios.push(req.body);
    res.status(201).send("OK");
});

app.post('/api/login', (req, res) => {
    const { user, password } = req.body;
    const existe = usuarios.find(u => u.user === user && u.password === password);
    if (existe) res.status(200).send("OK");
    else res.status(401).send("Erro");
});

// Gestão de Estoque
app.get('/api/estoque', (req, res) => res.json(estoque));
app.post('/api/estoque', (req, res) => {
    estoque.push(req.body);
    res.status(201).send("Adicionado");
});
app.delete('/api/estoque/:id', (req, res) => {
    estoque.splice(req.params.id, 1);
    res.send("Removido");
});

// Histórico de Vendas
app.get('/api/vendas', (req, res) => res.json(historicoVendas));
app.post('/api/vendas', (req, res) => {
    historicoVendas.push(req.body);
    res.status(201).send("Registrado");
});
app.delete('/api/vendas/:id', (req, res) => {
    historicoVendas.splice(req.params.id, 1);
    res.send("Removido");
});

app.listen(3000, () => console.log("Servidor LANCHE rodando em http://localhost:3000"));