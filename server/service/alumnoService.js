import Alumno from '../models/Alumno.js';

export const getAlumnos = async () => {
  return await Alumno.query();
};

export const getAlumnoById = async (id) => {
  return await Alumno.query().findById(id);
};

export const createAlumno = async (data) => {
  return await Alumno.query().insert(data);
};

export const updateAlumno = async (id, data) => {
  return await Alumno.query().patchAndFetchById(id, data);
};

export const deleteAlumno = async (id) => {
  return await Alumno.query().deleteById(id);
};
