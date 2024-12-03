import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';

const SECRET_KEY = 'your_secret_key'; // Cambia esto por tu clave secreta

export const loginUsuario = async (correo, password) => {
  const usuario = await Usuario.query().findOne({ correo });
  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }

  const isPasswordValid = await bcrypt.compare(password, usuario.password);
  if (!isPasswordValid) {
    throw new Error('Contraseña incorrecta');
  }

  const token = jwt.sign(
    { id: usuario.idusuario, correo: usuario.correo, rol: usuario.rol },
    SECRET_KEY,
    { expiresIn: '24h' }
  );

  return { token };
};
