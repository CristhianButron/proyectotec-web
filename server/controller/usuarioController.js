import { getUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } from '../service/usuarioService.js';

export const getUsuariosController = async (req, res) => {
    try {
        const usuarios = await getUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving usuarios', error });
    }
};

export const getUsuarioByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const idInt = parseInt(id, 10);
        if (isNaN(idInt)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        const usuario = await getUsuarioById(idInt);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving usuario', error });
    }
};

export const createUsuarioController = async (req, res) => {
    try {
        const nuevoUsuario = await createUsuario(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ message: 'Error creating usuario', error });
    }
};

export const updateUsuarioController = async (req, res) => {
    try {
        const { id } = req.params;
        const idInt = parseInt(id, 10);
        if (isNaN(idInt)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        const usuarioActualizado = await updateUsuario(idInt, req.body);
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error updating usuario', error });
    }
};

export const deleteUsuarioController = async (req, res) => {
    try {
        const { id } = req.params;
        const idInt = parseInt(id, 10);
        if (isNaN(idInt)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        await deleteUsuario(idInt);
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting usuario', error });
    }
};