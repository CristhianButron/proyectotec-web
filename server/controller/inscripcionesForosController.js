import { getInscripcionesForos, getInscripcionForoById, createInscripcionForo, updateInscripcionForo, deleteInscripcionForo } from '../service/inscripcionForosService.js';

export const getInscripcionesForosController = async (req, res) => {
    try {
        const inscripciones = await getInscripcionesForos();
        res.status(200).json(inscripciones);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving inscripciones', error });
    }
};

export const getInscripcionForoByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const inscripcion = await getInscripcionForoById(id);
        res.status(200).json(inscripcion);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving inscripcion', error });
    }
};

export const createInscripcionForoController = async (req, res) => {
    try {
        const nuevaInscripcion = await createInscripcionForo(req.body);
        res.status(201).json(nuevaInscripcion);
    } catch (error) {
        res.status(500).json({ message: 'Error creating inscripcion', error });
    }
};

export const updateInscripcionForoController = async (req, res) => {
    try {
        const { id } = req.params;
        const inscripcionActualizada = await updateInscripcionForo(id, req.body);
        res.status(200).json(inscripcionActualizada);
    } catch (error) {
        res.status(500).json({ message: 'Error updating inscripcion', error });
    }
};

export const deleteInscripcionForoController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteInscripcionForo(id);
        res.status(200).json({ message: 'Inscripcion eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting inscripcion', error });
    }
};
