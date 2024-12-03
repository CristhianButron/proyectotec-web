import InscripcionesForos from '../models/InscripcionesForos.js';

export const getInscripcionesForos = async () => {
  return await InscripcionesForos.query();
};

export const getInscripcionForoById = async (id) => {
  return await InscripcionesForos.query().findById(id);
};

export const createInscripcionForo = async (data) => {
  return await InscripcionesForos.query().insert(data);
};

export const updateInscripcionForo = async (id, data) => {
  return await InscripcionesForos.query().patchAndFetchById(id, data);
};

export const deleteInscripcionForo = async (id) => {
  return await InscripcionesForos.query().deleteById(id);
};
