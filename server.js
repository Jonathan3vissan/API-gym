// server.js

import express, { json } from 'express';
import cors from 'cors'; // Para permitir solicitudes desde otros dominios
import usaRutas from './rutas/rutasUsuario.js'; // Importar las rutas de usuario

const server = express();

// Habilitar CORS
server.use(cors());

// Middleware para parsear cuerpos JSON
server.use(json());

// Usar las rutas
server.use('/api', usaRutas);

export default server;
