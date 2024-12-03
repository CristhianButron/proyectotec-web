import Administrativo from '../models/Administrativo.js';

export const getAdministrativos = async () => {
  return await Administrativo.query();
};

export const getAdministrativoById = async (id) => {
  return await Administrativo.query().findById(id);
};

export const createAdministrativo = async (data) => {
  return await Administrativo.query().insert(data);
};

export const updateAdministrativo = async (id, data) => {
  return await Administrativo.query().patchAndFetchById(id, data);
};

export const deleteAdministrativo = async (id) => {
  return await Administrativo.query().deleteById(id).returning('*');
};
