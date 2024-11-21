import db from '../config/db.config.js';

const User = {
    create: async (usuarioDtaos) => {
        const [rows] = await db.execute('INSERT INTO registro_cliente (nombre, apellido, dni, mail, telefono) VALUES (?, ?, ?, ?, ?)', [usuarioDtaos.nombre
            , usuarioDtaos.apellido, usuarioDtaos.dni, usuarioDtaos.mail, usuarioDtaos.telefono]);
        return rows;
    },

    findAll: async () => {
        const [rows] = await db.execute('SELECT * FROM registro_cliente');
        return rows;
    },

    findById: async (id) => {
        const [rows] = await db.execute('SELECT * FROM registro_cliente WHERE id = ?', [id]);
        return rows[0];
    },

    update: async (usuarioDatos) => {
        const [rows] = await db.execute('UPDATE registro_cliente SET nombre = ?,apellido = ? ,dni = ? mail = ?, telefono = ? WHERE id = ?', [usuarioDatos.nombre
            , usuarioDatos.apellido, usuarioDatos.dni, usuarioDatos.mail, usuarioDatos.telefono]);
        return rows;
    },

    delete: async (id) => {
        const [rows] = await db.execute('DELETE FROM registro_cliente WHERE id = ?', [id]);
        return rows;
    }
};

export default User;
