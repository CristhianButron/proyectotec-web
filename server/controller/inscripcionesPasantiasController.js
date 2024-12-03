import {
    getInscripcionesPasantias,
    getInscripcionPasantiaById,
    createInscripcionPasantia,
    updateInscripcionPasantia,
    deleteInscripcionPasantia,
  } from '../service/inscripcionesPasantiasService.js';
  
  export const getInscripcionesPasantiasController = async (req, res) => {
    try {
      const inscripciones = await getInscripcionesPasantias();
      res.status(200).json(inscripciones);
    } catch (error) {
      res.status(500).json({
        message: 'Error retrieving inscripciones pasantias',
        error: error.message,
      });
    }
  };
  
  export const getInscripcionPasantiaByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const inscripcion = await getInscripcionPasantiaById(id);
      if (!inscripcion) {
        return res.status(404).json({ message: 'Inscripcion pasantia not found' });
      }
      res.status(200).json(inscripcion);
    } catch (error) {
      res.status(500).json({
        message: 'Error retrieving inscripcion pasantia',
        error: error.message,
      });
    }
  };
  
  export const createInscripcionPasantiaController = async (req, res) => {
    try {
      const nuevaInscripcion = await createInscripcionPasantia(req.body);
      res.status(201).json(nuevaInscripcion);
    } catch (error) {
      res.status(500).json({
        message: 'Error creating inscripcion pasantia',
        error: error.message,
      });
    }
  };
  
  export const updateInscripcionPasantiaController = async (req, res) => {
    try {
      const { id } = req.params;
      const inscripcionActualizada = await updateInscripcionPasantia(id, req.body);
      if (!inscripcionActualizada) {
        return res.status(404).json({ message: 'Inscripcion pasantia not found' });
      }
      res.status(200).json(inscripcionActualizada);
    } catch (error) {
      res.status(500).json({
        message: 'Error updating inscripcion pasantia',
        error: error.message,
      });
    }
  };
  
  export const deleteInscripcionPasantiaController = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedInscripcion = await deleteInscripcionPasantia(id);
      if (!deletedInscripcion) {
        return res.status(404).json({ message: 'Inscripcion pasantia not found' });
      }
      res.status(200).json({ message: 'Inscripcion pasantia eliminada' });
    } catch (error) {
      res.status(500).json({
        message: 'Error deleting inscripcion pasantia',
        error: error.message,
      });
    }
  };
  