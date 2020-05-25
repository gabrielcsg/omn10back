require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// Conexão com o mongodb.
mongoose.connect(process.env.MONGO_URL, {
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
app.listen(process.env.PORT || 3333);