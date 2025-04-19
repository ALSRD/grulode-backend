const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/grulode', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('No se pudo conectar a MongoDB', err));

app.get('/', (req, res) => res.send('GRULODE Backend funcionando'));

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
