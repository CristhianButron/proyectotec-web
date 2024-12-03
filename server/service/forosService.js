import Foros from '../models/Foros.js';

export const getForos = async () => {
  return await Foros.query();
};

export const getForoById = async (id) => {
  return await Foros.query().findById(id);
};

export const createForo = async (data) => {
  return await Foros.query().insert(data);
};

export const updateForo = async (id, data) => {
  return await Foros.query().patchAndFetchById(id, data);
};

export const deleteForo = async (id) => {
  return await Foros.query().deleteById(id);
};
