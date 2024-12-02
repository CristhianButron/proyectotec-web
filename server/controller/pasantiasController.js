import { getPasantias, getPasantiaById, createPasantia, updatePasantia, deletePasantia } from '../service/pasantiasService.js';

export const getPasantiasController = async (req, res) => {
    try {
        const pasantias = await getPasantias();
        res.status(200).json(pasantias);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving pasantias', error });
    }
};

export const getPasantiaByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const pasantia = await getPasantiaById(id);
        res.status(200).json(pasantia);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving pasantia', error });
    }
};

export const createPasantiaController = async (req, res) => {
    try {
        const nuevaPasantia = await createPasantia(req.body);
        res.status(201).json(nuevaPasantia);
    } catch (error) {
        res.status(500).json({ message: 'Error creating pasantia', error });
    }
};

export const updatePasantiaController = async (req, res) => {
    try {
        const { id } = req.params;
        const pasantiaActualizada = await updatePasantia(id, req.body);
        res.status(200).json(pasantiaActualizada);
    } catch (error) {
        res.status(500).json({ message: 'Error updating pasantia', error });
    }
};

export const deletePasantiaController = async (req, res) => {
    try {
        const { id } = req.params;
        await deletePasantia(id);
        res.status(200).json({ message: 'Pasantia eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting pasantia', error });
    }
};
