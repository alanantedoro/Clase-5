const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res, next) => {
    res.send({ mensaje: 'HOLA MUNDO'})
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});

app.on('error', (error) => console.log('Error: ', error));

