import express from 'express';
import { 
  crearUsuario, 
  obtenerUsuarios, 
  obtenerUsuarioPorId, 
  actualizarUsuario, 
  eliminarUsuario 
} from '../controladores/usuarioControl.js';
const rutas = express.Router();
rutas.post('/usuarios', crearUsuario);              
rutas.get('/usuarios', obtenerUsuarios);             
rutas.get('/usuarios/:id', obtenerUsuarioPorId);    
rutas.put('/usuarios/:id', actualizarUsuario);      
rutas.delete('/usuarios/:id', eliminarUsuario);    
export default rutas;