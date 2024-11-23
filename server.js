import express, { json } from 'express';
import usaRutas from './rutas/rutasUsuario.js';
import cors from 'cors'; // Importar CORS

const server = express();

// Habilitar CORS para todas las solicitudes
server.use(cors());
// Middleware para manejar JSON
server.use(json());

// Rutas
server.use('/api', usaRutas);

export default server;