import pool from '../configuracion/configuracionDB.js';
/**
 * obtiene la tabla regsitro_cliente
 * @param {Object} req los datos enviados por el usuario
 * @param {Objeto} res recibe el usuario los datos devuelto por el servidor
 */
const obtenerUsuario = async (req, res) => {
    try {
        const rows = await pool.query('SELECT * FROM registro_cliente');
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los usuarios en funcion del controladorlinea  13');
    }
};
/**
 * obtiene un usuario en especifoc indetificado por el dni
 * @param {Object} req los datos enviados por el usuario
 * @param {Object} res recibe el usuario los datos devuelto por el servidor
 * @returns 
 */
const obtenerUsuarioPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM registro_cliente WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el usuario');
    }
};
/**
 * crea un usuario
 * @param {Object} req los datos enviados por el usuario
 * @param {Object} res recibe el usuario los datos devuelto por el servidor
 */
const crearUsuario = async (req, res) => {
    const { nombre, apellido, dni, mail, telefono
    } = req.body;
    try {
        console.log('Datos a insertar:', nombre, apellido, dni, mail, telefono);
        const result = await pool.query('INSERT INTO registro_cliente (Nombre, Apellido ,DNI , Mail, Telefono) VALUES (?,?,?,?,?)', [nombre, apellido, dni, mail, telefono
        ]);
        res.status(201).json({
            id: result.insertId, nombre, apellido, dni, mail, telefono
        });
    } catch (error) {
        console.error("ocurrio error:", error);
        res.status(500).send('Error al crear el usuario estamos en el archivo controlador');
    }
};
/**
 * actualiza un usuario
 * @param {Object} req los datos enviados por el usuario
 * @param {Object} res recibe el usuario los datos devuelto por el servidor
 */
const actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre, dni, apellido, mail, telefono
    } = req.body;
    try {
        const [result] = await pool.query('UPDATE registro_cliente SET nombre = ?, dni = ?, apellido = ?, mail = ?, telefono = ? WHERE id = ?', [nombre, dni, apellido, mail, telefono,id
        ]);
        if (result.affectedRows === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.json({
            message: 'Usuario actualizado exitosamente', id, nombre, apellido, dni, mail, telefono
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el usuario');
    }
};

// Controlador para eliminar un usuario
/**
 * elimina un usuario de la tabla registro cliente
 * @param {Object} req los datos enviados por el usuario
 * @param {Object} res recibe el usuario los datos devuelto por el servidor
 */
const eliminarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM registro_cliente WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el usuario');
    }
};

export default {
    obtenerUsuario,
    obtenerUsuarioPorId,
    crearUsuario,
    eliminarUsuario,
    actualizarUsuario

};