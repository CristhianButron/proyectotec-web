import { getForos, getForoById, createForo, updateForo, deleteForo } from '../service/forosService.js';

export const getForosController = async (req, res) => {
    try {
        const foros = await getForos();
        res.status(200).json(foros);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving foros', error });
    }
};

export const getForoByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const foro = await getForoById(id);
        res.status(200).json(foro);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving foro', error });
    }
};

export const createForoController = async (req, res) => {
    try {
        const nuevoForo = await createForo(req.body);
        res.status(201).json(nuevoForo);
    } catch (error) {
        res.status(500).json({ message: 'Error creating foro', error });
    }
};

export const updateForoController = async (req, res) => {
    try {
        const { id } = req.params;
        const foroActualizado = await updateForo(id, req.body);
        res.status(200).json(foroActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error updating foro', error });
    }
};

export const deleteForoController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteForo(id);
        res.status(200).json({ message: 'Foro eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting foro', error });
    }
};
