import db from '../configuracion/configuracionDB.js';

const usuario = {
  create: async (usuarioDatos) => {
    const [rows] = db.execute(
      'INSERT INTO registro_cliente (nombre, apellido, dni, mail, telefono) VALUES (?, ?, ?, ?, ?)',
      [usuarioDatos.nombre, usuarioDatos.apellido, usuarioDatos.dni, usuarioDatos.mail, usuarioDatos.telefono]
    );
    return rows;
  },

  findAll: async () => {
    const rows = db.execute('SELECT * FROM registro_cliente');
    return rows;
  },

  findById: async (id) => {
    const rows = db.execute('SELECT * FROM registro_cliente WHERE id = ?', [id]);
    return rows;  
  },

  update: async (id, usuarioDatos) => {
    const [rows] = db.execute(
      'UPDATE registro_cliente SET nombre = ?, apellido = ?, dni = ?, mail = ?, telefono = ? WHERE id = ?',
      [usuarioDatos.nombre, usuarioDatos.apellido, usuarioDatos.dni, usuarioDatos.mail, usuarioDatos.telefono, id]
    );
    return rows; 
  },

  delete: async (id) => {
    const [rows] = db.execute('DELETE FROM registro_cliente WHERE id = ?', [id]);
    return rows; 
  }
};

export default usuario;
