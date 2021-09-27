const express = require('express');

const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('./productos.json')

const app = express();

const PORT = 8080;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
//Routing
app.get('/', (req, res) => {
    res.send({ mensaje: '5. Servidores Web'})
});

app.get('/productos', async (req, res) => {
    const productos = await contenedor.getAll();
    console.log('productos: ', productos);
    res.json( productos );
});

app.get('/productoRandom', async (req, res) => {
    const productos = await contenedor.getAll();
    let random = getRandom(0, productos.length - 1);
    console.log(random);
    res.json( productos[random] );
});



//Server init y error
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});

app.on('error', (error) => console.log('Error: ', error));

