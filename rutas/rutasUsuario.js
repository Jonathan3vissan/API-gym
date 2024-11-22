import express from 'express';
import controlRutas
  from '../controladores/controladorUsuario.js';
const rutas = express.Router();
rutas.post('/usuarios',controlRutas.crearUsuario);
rutas.get('/usuarios', controlRutas.obtenerUsuario);
rutas.get('/usuarios/:id',controlRutas.obtenerUsuarioPorId  );
rutas.put('/usuarios/:id',controlRutas.actualizarUsuario );
rutas.delete('/usuarios/:id', controlRutas.eliminarUsuario);
export default rutas;