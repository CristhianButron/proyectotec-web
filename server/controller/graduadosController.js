import { getGraduados, getGraduadoById, createGraduado, updateGraduado, deleteGraduado } from '../service/graduadosService.js';

export const getGraduadosController = async (req, res) => {
    try {
        const graduados = await getGraduados();
        res.status(200).json(graduados);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving graduados', error });
    }
};

export const getGraduadoByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const graduado = await getGraduadoById(id);
        res.status(200).json(graduado);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving graduado', error });
    }
};

export const createGraduadoController = async (req, res) => {
    try {
        const nuevoGraduado = await createGraduado(req.body);
        res.status(201).json(nuevoGraduado);
    } catch (error) {
        res.status(500).json({ message: 'Error creating graduado', error });
    }
};

export const updateGraduadoController = async (req, res) => {
    try {
        const { id } = req.params;
        const graduadoActualizado = await updateGraduado(id, req.body);
        res.status(200).json(graduadoActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error updating graduado', error });
    }
};

export const deleteGraduadoController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteGraduado(id);
        res.status(200).json({ message: 'Graduado eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting graduado', error });
    }
};
