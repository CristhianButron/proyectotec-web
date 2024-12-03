import {
    getGraduados,
    getGraduadoById,
    createGraduado,
    updateGraduado,
    deleteGraduado,
  } from '../service/graduadosService.js';
  
  export const getGraduadosController = async (req, res) => {
    try {
      const graduados = await getGraduados();
      res.status(200).json(graduados);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving graduados', error: error.message });
    }
  };
  
  export const getGraduadoByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const graduado = await getGraduadoById(id);
      if (!graduado) {
        return res.status(404).json({ message: 'Graduado not found' });
      }
      res.status(200).json(graduado);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving graduado', error: error.message });
    }
  };
  
  export const createGraduadoController = async (req, res) => {
    try {
      const nuevoGraduado = await createGraduado(req.body);
      res.status(201).json(nuevoGraduado);
    } catch (error) {
      res.status(500).json({ message: 'Error creating graduado', error: error.message });
    }
  };
  
  export const updateGraduadoController = async (req, res) => {
    try {
      const { id } = req.params;
      const graduadoActualizado = await updateGraduado(id, req.body);
      if (!graduadoActualizado) {
        return res.status(404).json({ message: 'Graduado not found' });
      }
      res.status(200).json(graduadoActualizado);
    } catch (error) {
      res.status(500).json({ message: 'Error updating graduado', error: error.message });
    }
  };
  
  export const deleteGraduadoController = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedGraduado = await deleteGraduado(id);
      if (!deletedGraduado) {
        return res.status(404).json({ message: 'Graduado not found' });
      }
      res.status(200).json({ message: 'Graduado eliminado' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting graduado', error: error.message });
    }
  };
  