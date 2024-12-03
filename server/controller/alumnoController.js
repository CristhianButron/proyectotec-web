import {
    getAlumnos,
    getAlumnoById,
    createAlumno,
    updateAlumno,
    deleteAlumno,
  } from '../service/alumnoService.js';
  
  export const getAlumnosController = async (req, res) => {
    try {
      const alumnos = await getAlumnos();
      res.status(200).json(alumnos);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving alumnos', error: error.message });
    }
  };
  
  export const getAlumnoByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const alumno = await getAlumnoById(id);
      if (!alumno) {
        return res.status(404).json({ message: 'Alumno not found' });
      }
      res.status(200).json(alumno);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving alumno', error: error.message });
    }
  };
  
  export const createAlumnoController = async (req, res) => {
    try {
      const nuevoAlumno = await createAlumno(req.body);
      res.status(201).json(nuevoAlumno);
    } catch (error) {
      res.status(500).json({ message: 'Error creating alumno', error: error.message });
    }
  };
  
  export const updateAlumnoController = async (req, res) => {
    try {
      const { id } = req.params;
      const alumnoActualizado = await updateAlumno(id, req.body);
      if (!alumnoActualizado) {
        return res.status(404).json({ message: 'Alumno not found' });
      }
      res.status(200).json(alumnoActualizado);
    } catch (error) {
      res.status(500).json({ message: 'Error updating alumno', error: error.message });
    }
  };
  
  export const deleteAlumnoController = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAlumno = await deleteAlumno(id);
      if (!deletedAlumno) {
        return res.status(404).json({ message: 'Alumno not found' });
      }
      res.status(200).json({ message: 'Alumno eliminado' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting alumno', error: error.message });
    }
  };
  