import express from 'express';
import usuarioRutas from './rutas/rutasUsuario.js'

const app = express();
const puerto = 3000;


app.use('/api', usuarioRutas);
app.get('/saludo', (req, res) => {
    res.send('¡Hola, mundo!');
  });
  
app.listen(puerto, () => {
    console.log(`servidor corriendo en http://localhost:${puerto}`);

});