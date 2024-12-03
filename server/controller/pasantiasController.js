import {
    getPasantias,
    getPasantiaById,
    createPasantia,
    updatePasantia,
    deletePasantia,
  } from '../service/pasantiasService.js';
  
  export const getPasantiasController = async (req, res) => {
    try {
      const pasantias = await getPasantias();
      res.status(200).json(pasantias);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving pasantias', error: error.message });
    }
  };
  
  export const getPasantiaByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const pasantia = await getPasantiaById(id);
      if (!pasantia) {
        return res.status(404).json({ message: 'Pasantia not found' });
      }
      res.status(200).json(pasantia);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving pasantia', error: error.message });
    }
  };
  
  export const createPasantiaController = async (req, res) => {
    try {
      const nuevaPasantia = await createPasantia(req.body);
      res.status(201).json(nuevaPasantia);
    } catch (error) {
      res.status(500).json({ message: 'Error creating pasantia', error: error.message });
    }
  };
  
  export const updatePasantiaController = async (req, res) => {
    try {
      const { id } = req.params;
      const pasantiaActualizada = await updatePasantia(id, req.body);
      if (!pasantiaActualizada) {
        return res.status(404).json({ message: 'Pasantia not found' });
      }
      res.status(200).json(pasantiaActualizada);
    } catch (error) {
      res.status(500).json({ message: 'Error updating pasantia', error: error.message });
    }
  };
  
  export const deletePasantiaController = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedPasantia = await deletePasantia(id);
      if (!deletedPasantia) {
        return res.status(404).json({ message: 'Pasantia not found' });
      }
      res.status(200).json({ message: 'Pasantia eliminada' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting pasantia', error: error.message });
    }
  };
  