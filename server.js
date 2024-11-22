import express, { json } from 'express';
import usaRutas from './rutas/rutasUsuario.js';

const server = express();

// Middleware para manejar JSON
server.use(json());

// Rutas
server.use('/api', usaRutas);

export default server;