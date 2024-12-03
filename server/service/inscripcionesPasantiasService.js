import InscripcionesPasantias from '../models/InscripcionesPasantias.js';

export const getInscripcionesPasantias = async () => {
  return await InscripcionesPasantias.query();
};

export const getInscripcionPasantiaById = async (id) => {
  return await InscripcionesPasantias.query().findById(id);
};

export const createInscripcionPasantia = async (data) => {
  return await InscripcionesPasantias.query().insert(data);
};

export const updateInscripcionPasantia = async (id, data) => {
  return await InscripcionesPasantias.query().patchAndFetchById(id, data);
};

export const deleteInscripcionPasantia = async (id) => {
  return await InscripcionesPasantias.query().deleteById(id);
};
