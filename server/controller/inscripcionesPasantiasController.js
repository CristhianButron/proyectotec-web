import { getInscripcionesPasantias, getInscripcionPasantiaById, createInscripcionPasantia, updateInscripcionPasantia, deleteInscripcionPasantia } from '../service/inscripcionesPasantiasService.js';

export const getInscripcionesPasantiasController = async (req, res) => {
    try {
        const inscripciones = await getInscripcionesPasantias();
        res.status(200).json(inscripciones);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving inscripciones pasantias', error });
    }
};

export const getInscripcionPasantiaByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const inscripcion = await getInscripcionPasantiaById(id);
        res.status(200).json(inscripcion);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving inscripcion pasantia', error });
    }
};

export const createInscripcionPasantiaController = async (req, res) => {
    try {
        const nuevaInscripcion = await createInscripcionPasantia(req.body);
        res.status(201).json(nuevaInscripcion);
    } catch (error) {
        res.status(500).json({ message: 'Error creating inscripcion pasantia', error });
    }
};

export const updateInscripcionPasantiaController = async (req, res) => {
    try {
        const { id } = req.params;
        const inscripcionActualizada = await updateInscripcionPasantia(id, req.body);
        res.status(200).json(inscripcionActualizada);
    } catch (error) {
        res.status(500).json({ message: 'Error updating inscripcion pasantia', error });
    }
};

export const deleteInscripcionPasantiaController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteInscripcionPasantia(id);
        res.status(200).json({ message: 'Inscripcion pasantia eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting inscripcion pasantia', error });
    }
};
