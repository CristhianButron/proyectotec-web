import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../config/database.js';

const SECRET_KEY = 'your_secret_key'; // Cambia esto por tu clave secreta

export const loginUsuario = async (correo, password) => {
    // Verificar si el usuario existe
    const result = await pool.query('SELECT * from usuario WHERE correo = $1', [correo]);
    if (result.rows.length === 0) {
        throw new Error('Usuario no encontrado');
    }

    const usuario = result.rows[0];

    // Comparar la contraseña
    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    if (!isPasswordValid) {
        throw new Error('Contraseña incorrecta');
    }

    // Generar el token JWT
    const token = jwt.sign({ id: usuario.idusuario, correo: usuario.correo, rol: usuario.rol }, SECRET_KEY, { expiresIn: '24h' });

    return { token };
};