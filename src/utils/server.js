// importacion de Express
const express = require('express');
const exphbs = require('express.handlerbars');
const app = express();
// escucha
app.listen(process.env.PORT || 3_000);


app.engine('hbs', exphbs.engine({
  extname: 'hbs', // ! asigna un nuevo nombre de la extencion
  layoutsDir: './src/views/layouts', // ! Cambia el directorio de los layouts
  partialsDir: './src/views/partials' // ! Cambia el directorio de los partials
}));

// configuracion de handlerbars
app.engine('hbs', exphbs.engine());
app.set('view engine', 'hbs');
app.set('views', './src/views');

//Configuracion
app.use('*/bootstrap', express.static('./node_modules/bootstrap/dist', { root: process.cwd() }));
app.use('/jquery', express.static('./node_modules/jquery/dist', { root: process.cwd() }));
app.use('/assets', express.static('./public/assets', { root: process.cwd() }));

//Renderizar ruta
app.get('/', (req, res) => { res.render('home')});

// arreglo
const arrFrutas = ['Banana', 'Cebollas', 'Pimenton', 'Papas', 'lechugas', 'Tomate']

// ruta por defecto
app.all('*', (req, res) => res.status(404).json({ code: 404, message: 'Pagina no Encontrada' }));
module.exports = { app };