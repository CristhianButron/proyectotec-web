import bcrypt from 'bcrypt';
import Usuario from '../models/Usuario.js';

export const getUsuarios = async () => {
  return await Usuario.query();
};

export const getUsuarioById = async (id) => {
  return await Usuario.query().findById(id);
};

export const createUsuario = async (data) => {
  const { nombre, apellido, correo, celular, rol, password } = data;

  // Verificar si el correo ya existe
  const existingUser = await Usuario.query().findOne({ correo });
  if (existingUser) {
    throw new Error('El correo ya está en uso');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return await Usuario.query().insert({
    nombre,
    apellido,
    correo,
    celular,
    rol,
    password: hashedPassword,
  });
};

export const updateUsuario = async (id, data) => {
  const { nombre, apellido, correo, celular, rol, password } = data;
  const hashedPassword = await bcrypt.hash(password, 10);
  return await Usuario.query().patchAndFetchById(id, {
    nombre,
    apellido,
    correo,
    celular,
    rol,
    password: hashedPassword,
  });
};

export const deleteUsuario = async (id) => {
  return await Usuario.query().deleteById(id);
};
