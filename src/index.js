const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// Conexão com o mongodb.
mongoose.connect('mongodb+srv://gabriel:vegeta123@clustermain-8reir.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Comunicação com outros sites
app.use(cors());

// Aceitar o body como json.
app.use(express.json()); 

// Usar rotas
app.use(routes);

// Porta do servidor
app.listen(3333);