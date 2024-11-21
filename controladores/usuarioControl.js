// /controladores/usuarioControlador.js
import usuario from '../modelos/usuarioModelo.js';

// Crear un nuevo usuario
export const crearUsuario = async (req, res) => {
  const { nombre, apellido, dni, mail, telefono } = req.body;
  try {
    await usuario.create({ nombre, apellido, dni, mail, telefono });
    res.status(201).send('Usuario creado con éxito');
  } catch (err) {
    console.error(err);  // Mostrar el error en la consola
    res.status(500).send('Error al crear el usuario');
  }
};

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await usuario.findAll();
    res.status(200).json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los usuarios');
  }
};

// Obtener un usuario por ID
export const obtenerUsuarioPorId = async (req, res) => {
  const usuarioId = req.params.id;
  try {
    const usuarioEncontrado = await usuario.findById(usuarioId);
    if (!usuarioEncontrado) {
      res.status(404).send('Usuario no encontrado');
      return;
    }
    res.status(200).json(usuarioEncontrado);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener el usuario');
  }
};

// Actualizar un usuario
export const actualizarUsuario = async (req, res) => {
  const usuarioId = req.params.id;
  const { nombre, apellido, dni, mail, telefono } = req.body;
  try {
    const usuarioActualizado = await usuario.update(usuarioId, { nombre, apellido, dni, mail, telefono });
    if (usuarioActualizado.affectedRows === 0) {
      res.status(404).send('Usuario no encontrado');
      return;
    }
    res.status(200).send('Usuario actualizado con éxito');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar el usuario');
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (req, res) => {
  const usuarioId = req.params.id;
  try {
    const usuarioEliminado = await usuario.delete(usuarioId);
    if (usuarioEliminado.affectedRows === 0) {
      res.status(404).send('Usuario no encontrado');
      return;
    }
    res.status(200).send('Usuario eliminado con éxito');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al eliminar el usuario');
  }
};
