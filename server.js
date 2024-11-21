import express from 'express';
import bodyParser from 'body-parser';
import usuarioRutas from './rutas/rutasUsuario.js'

const app = express();
const puerto = 3000;

app.use(bodyParser.json);

app.use(`/api`, usuarioRutas);

app.listen(puerto, () => {
    console.log(`servidor corriendo en hhtp://localhost:${puerto}`);

});