import pool from '../config/database.js';

// Controlador para obtener todos los usuarios
const obtenerUsuario = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM registro_liente');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los usuarios');
    }
};

// Controlador para obtener un usuario específico
const obtenerUsuarioPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM registro_liente WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el usuario');
    }
};

// Controlador para crear un usuario
const crearUsuario = async (req, res) => {
    const { name, email } = req.body;
    try {
        const [result] = await pool.query('INSERT INTO registro_liente (name, email) VALUES (?, ?)', [name, email]);
        res.status(201).json({ id: result.insertId, name, email });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el usuario');
    }
};

// Controlador para actualizar un usuario
const actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const [result] = await pool.query('UPDATE registro_liente SET name = ?, email = ? WHERE id = ?', [name, email, id]);
        if (result.affectedRows === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.json({ message: 'Usuario actualizado exitosamente', id, name, email });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el usuario');
    }
};

// Controlador para eliminar un usuario
const eliminarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM registro_liente WHERE id = ?', [id]);
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
    actualizarUsuario,
    eliminarUsuario
};