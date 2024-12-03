import Graduados from '../models/Graduados.js';

export const getGraduados = async () => {
  return await Graduados.query();
};

export const getGraduadoById = async (id) => {
  return await Graduados.query().findById(id);
};

export const createGraduado = async (data) => {
  return await Graduados.query().insert(data);
};

export const updateGraduado = async (id, data) => {
  return await Graduados.query().patchAndFetchById(id, data);
};

export const deleteGraduado = async (id) => {
  return await Graduados.query().deleteById(id);
};
