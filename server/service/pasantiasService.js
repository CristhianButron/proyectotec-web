import Pasantias from '../models/Pasantias.js';

export const getPasantias = async () => {
  return await Pasantias.query();
};

export const getPasantiaById = async (id) => {
  return await Pasantias.query().findById(id);
};

export const createPasantia = async (data) => {
  return await Pasantias.query().insert(data);
};

export const updatePasantia = async (id, data) => {
  return await Pasantias.query().patchAndFetchById(id, data);
};

export const deletePasantia = async (id) => {
  return await Pasantias.query().deleteById(id);
};
