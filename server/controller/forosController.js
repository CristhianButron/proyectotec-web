import {
    getForos,
    getForoById,
    createForo,
    updateForo,
    deleteForo,
  } from '../service/forosService.js';
  
  export const getForosController = async (req, res) => {
    try {
      const foros = await getForos();
      res.status(200).json(foros);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving foros', error: error.message });
    }
  };
  
  export const getForoByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const foro = await getForoById(id);
      if (!foro) {
        return res.status(404).json({ message: 'Foro not found' });
      }
      res.status(200).json(foro);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving foro', error: error.message });
    }
  };
  
  export const createForoController = async (req, res) => {
    try {
      const nuevoForo = await createForo(req.body);
      res.status(201).json(nuevoForo);
    } catch (error) {
      res.status(500).json({ message: 'Error creating foro', error: error.message });
    }
  };
  
  export const updateForoController = async (req, res) => {
    try {
      const { id } = req.params;
      const foroActualizado = await updateForo(id, req.body);
      if (!foroActualizado) {
        return res.status(404).json({ message: 'Foro not found' });
      }
      res.status(200).json(foroActualizado);
    } catch (error) {
      res.status(500).json({ message: 'Error updating foro', error: error.message });
    }
  };
  
  export const deleteForoController = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedForo = await deleteForo(id);
      if (!deletedForo) {
        return res.status(404).json({ message: 'Foro not found' });
      }
      res.status(200).json({ message: 'Foro eliminado' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting foro', error: error.message });
    }
  };
  