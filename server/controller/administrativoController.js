import { getAdministrativos, getAdministrativoById, createAdministrativo, updateAdministrativo, deleteAdministrativo } from '../service/administrativoService.js';

export const getAdministrativosController = async (req, res) => {
    try {
        const administrativos = await getAdministrativos();
        res.status(200).json(administrativos);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving administrativos', error });
    }
};

export const getAdministrativoByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const administrativo = await getAdministrativoById(id);
        res.status(200).json(administrativo);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving administrativo', error });
    }
};

export const createAdministrativoController = async (req, res) => {
    try {
        const data = req.body;
        const newAdministrativo = await createAdministrativo(data);
        res.status(201).json(newAdministrativo);
    } catch (error) {
        res.status(500).json({ message: 'Error creating administrativo', error });
    }
};

export const updateAdministrativoController = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedAdministrativo = await updateAdministrativo(id, data);
        res.status(200).json(updatedAdministrativo);
    } catch (error) {
        res.status(500).json({ message: 'Error updating administrativo', error });
    }
};

export const deleteAdministrativoController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAdministrativo = await deleteAdministrativo(id);
        res.status(200).json(deletedAdministrativo);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting administrativo', error });
    }
};