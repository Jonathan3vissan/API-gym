// /rutas/usuarioRutas.js
import express from 'express';
import { 
  crearUsuario, 
  obtenerUsuarios, 
  obtenerUsuarioPorId, 
  actualizarUsuario, 
  eliminarUsuario 
} from '../controladores/usuarioControl.js';

const rutas = express.Router();

// Definición de las rutas
rutas.post('/usuarios', crearUsuario);              // Crear un usuario
rutas.get('/usuarios', obtenerUsuarios);            // Obtener todos los usuarios
rutas.get('/usuarios/:id', obtenerUsuarioPorId);    // Obtener usuario por ID
rutas.put('/usuarios/:id', actualizarUsuario);      // Actualizar un usuario
rutas.delete('/usuarios/:id', eliminarUsuario);    // Eliminar un usuario

export default rutas;
